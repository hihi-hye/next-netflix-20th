'use client';

import TNB from '@/components/TNB';
import RoundCard from './_components/RoundCard';
import Card from './_components/Card';
import ScreenWrapper from '@/components/ScreenWrapper';
import { SubTitle, Title } from './_components/style';
import LargeGradientCard from './_components/LargeGradientCard';
import PlayNav from './_components/PlayNav';

import { CardContainer } from './style';
import { MovieProps } from '@/types/MovieProps';

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
      <TNB />
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
      <SubTitle>Continue Watching for Emenalo</SubTitle>
      <CardContainer>
        {movies.map((movie) => (
          <Card
            key={movie.title}
            image={`${IMAGE_BASE_URL}w1280/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </CardContainer>
      <SubTitle>Popular on Netflix</SubTitle>
      <CardContainer>
        {movies.map((movie) => (
          <Card
            key={movie.title}
            image={`${IMAGE_BASE_URL}w1280/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </CardContainer>
    </ScreenWrapper>
  );
}
