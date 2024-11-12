import { searchMovies } from '@/services/searchMovies';
import SearchScreen from './screen';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams.query || '';

  const movieList = await searchMovies(query);

  return <SearchScreen movieList={movieList} />;
}
