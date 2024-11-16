import { fetchMovies } from '@/services/fetchMovies';

import HomeScreen from './screen';

export default async function Home() {
  const movies = await fetchMovies();
  const mainMovie = movies ? movies[0] : null;

  return <HomeScreen movies={movies} mainMovie={mainMovie} />;
}
