import { MovieProps } from '@/types/MovieProps';

export const searchMovies = async (query: string): Promise<MovieProps[]> => {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await fetch(endpoint);

  const data = await response.json();
  return data.results as MovieProps[];
};
