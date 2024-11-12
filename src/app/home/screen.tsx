'use client';

import RoundCard from './_components/RoundCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import { Title } from './_components/style';
import LargeGradientCard from './_components/LargeGradientCard';
import PlayNav from './_components/PlayNav';

import { CardContainer } from './style';
import { MovieProps } from '@/types/MovieProps';
import MovieList from './_components/MovieList';

export default function HomeScreen({
  movies,
  mainMovie,
}: {
  movies: MovieProps[];
  mainMovie: MovieProps | null;
}) {
  const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

  return (
    <ScreenWrapper>
      {mainMovie && (
        <>
          <LargeGradientCard
            key={'index'}
            image={`${IMAGE_BASE_URL}w1280/${mainMovie.poster_path}`}
            title={mainMovie.title}
          />
          <PlayNav movie={mainMovie} />
        </>
      )}
      <Title>Previews</Title>
      <CardContainer>
        {movies.map((movie, index) => (
          <RoundCard
            key={index}
            image={`${IMAGE_BASE_URL}w1280/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </CardContainer>
      <MovieList title="Continue Watching for Emenalo" movieList={movies} />
      <MovieList title="Popular on Netflix" movieList={movies} />
      <MovieList title="Trending Now" movieList={movies} />
      <MovieList title="Top 10 in Nigeria Today" movieList={movies} />
      <MovieList title="Popular on Netflix" movieList={movies} />
      <MovieList title="My List" movieList={movies} />
      <MovieList title="African Movies" movieList={movies} />
      <MovieList title="Nollywood Movies & TV" movieList={movies} />
      <MovieList title="Watch It Again" movieList={movies} />
      <MovieList title="New Releases" movieList={movies} />
      <MovieList title="TV Thrillers & Mysteries" movieList={movies} />
      <MovieList title="US TV Shows" movieList={movies} />
    </ScreenWrapper>
  );
}
