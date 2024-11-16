'use client';

import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';

import { MovieProps } from '@/types/MovieProps';
import useDebounce from '@/hooks/useDebounce';

import ScreenWrapper from '@/components/ScreenWrapper';
import { Input, InputContainer, TransparentButton } from './styles';

import SearchIcon from '@/assets/SearchIcon';
import XIcon from '@/assets/XIcon';
import SearchList from './_components/SearchList';

export default function SearchScreen({
  movieList,
}: {
  movieList: MovieProps[];
}) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  useDebounce(
    () => {
      router.replace(`/search?query=${query}`);
    },
    [query],
    1000,
  );

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery],
  );

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    router.replace(`/search?query=${query}`);
  };

  return (
    <ScreenWrapper>
      <InputContainer>
        <TransparentButton>
          <SearchIcon />
        </TransparentButton>
        <Input
          value={query}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for a show, movie, genre, e.t.c."
        />
        <TransparentButton>
          <XIcon />
        </TransparentButton>
      </InputContainer>

      <SearchList query={query} movieList={movieList} />
    </ScreenWrapper>
  );
}
