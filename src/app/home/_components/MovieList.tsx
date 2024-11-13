import { MovieProps } from '@/types/MovieProps';
import { SubTitle } from './style';
import { CardContainer } from '../style';
import Card from './Card';

function shuffleArray(array: MovieProps[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // 요소 교환
  }
  return array;
}

export default function MovieList({
  title,
  movieList,
}: {
  title: string;
  movieList: MovieProps[];
}) {
  const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL;

  return (
    <>
      <SubTitle>{title}</SubTitle>
      <CardContainer>
        {shuffleArray(movieList).map((movie: MovieProps) => (
          <Card
            key={movie.id}
            image={`${IMAGE_BASE_URL}w1280/${movie.poster_path}`}
            title={movie.title}
          />
        ))}
      </CardContainer>
    </>
  );
}
