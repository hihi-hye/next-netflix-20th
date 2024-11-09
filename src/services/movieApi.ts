import { MovieProps } from '@/types/MovieProps';

export const fetchMovies = async (): Promise<MovieProps[]> => {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(endpoint);

  const data = await response.json();
  return data.results as MovieProps[];
};
