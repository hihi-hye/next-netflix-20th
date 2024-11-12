'use client';

import { useEffect, useState } from 'react';
import { MovieProps } from '@/types/MovieProps';

import { fetchMovies } from '@/services/fetchMovies';

import TNB from '@/components/TNB';
import RoundCard from './_components/RoundCard';
import Card from './_components/Card';
import ScreenWrapper from '@/components/ScreenWrapper';
import { SubTitle, Title } from './_components/style';
import LargeGradientCard from './_components/LargeGradientCard';
import PlayNav from './_components/PlayNav';

import { CardContainer } from './style';

const Home = () => {
  const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [mainMovie, setMainMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const moviesData = await fetchMovies();
        setMovies(moviesData);
        setMainMovie(mainMovie || moviesData[1]);
      } catch (err) {
        console.log(err);
      }
    };

    loadMovies();
  }, []);

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
};

export default Home;
