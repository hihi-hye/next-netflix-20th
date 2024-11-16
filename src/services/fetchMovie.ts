import { MovieProps } from '@/types/MovieProps';

export const fetchMovie = async (id: string): Promise<MovieProps> => {
  const API_KEY = process.env.API_KEY;
  const API_URL = process.env.API_URL;

  const endpoint = `${API_URL}movie/${id}?api_key=${API_KEY}`;
  const response = await fetch(endpoint);

  const data = await response.json();
  return data;
};
