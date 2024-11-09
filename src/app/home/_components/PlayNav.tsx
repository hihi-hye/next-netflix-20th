import styled from 'styled-components';
import NamedButton from '@/components/button/NamedButton';
import PlayButton from '@/components/button/PlayButton';
import { MovieProps } from '@/types/MovieProps';

const PlayNav = ({ movie }: { movie: MovieProps }) => {
  return (
    <Container>
      <NamedButton
        type="button"
        src="/icon/plusIcon.svg"
        buttonName="My List"
        link="/"
      />
      <PlayButton movie={movie} />
      <NamedButton
        type="button"
        src="/icon/infoIcon.svg"
        buttonName="Info"
        link="/"
      />
    </Container>
  );
};

export default PlayNav;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
`;
