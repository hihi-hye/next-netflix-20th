import Image from 'next/image';
import styled from 'styled-components';
import { MovieProps } from '@/types/MovieProps';
import PlayCircleIcon from '@/assets/PlayCircleIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin: 0;
  padding: 20px 10px;

  color: #ffffff;
  font-size: 26.75px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07339449226856232px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

const MovieItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  position: relative;

  height: 76px;
  padding-right: 12px;
  background: #424242;

  object-fit: cover;
`;

const Thumbnail = styled(Image)`
  flex-shrink: 0;
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  flex: 1;
  color: white;
  font-size: 14.72px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.7511110901832581px;
`;

export default function SearchList({
  query,
  movieList,
}: {
  query: string;
  movieList: MovieProps[];
}) {
  return (
    <Container>
      <Title>{query ? `Search Result of: ${query}` : 'Top Searches'}</Title>
      <List>
        {movieList.map((movie) => (
          <MovieItem key={movie.id}>
            <Thumbnail
              src={`${process.env.IMAGE_BASE_URL}w1280/${movie.poster_path}`}
              alt={movie.title}
              width={146}
              height={76}
            />

            <MovieTitle>{movie.title}</MovieTitle>

            <PlayCircleIcon />
          </MovieItem>
        ))}
      </List>
    </Container>
  );
}
