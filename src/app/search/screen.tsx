'use client';

import ScreenWrapper from '@/components/ScreenWrapper';
import { MovieProps } from '@/types/MovieProps';
import MovieList from '../home/_components/MovieList';

export default function SearchScreen({
  movieList,
}: {
  movieList: MovieProps[];
}) {
  return (
    <ScreenWrapper>
      search page
      <MovieList title="Continue Watching for Emenalo" movieList={movieList} />
    </ScreenWrapper>
  );
}
