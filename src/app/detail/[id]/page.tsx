import { fetchMovie } from '@/services/fetchMovie';
import DetailScreen from './screen';

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const data = await fetchMovie(id);

  return <DetailScreen data={data} />;
}
