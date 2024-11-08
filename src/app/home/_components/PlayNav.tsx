import styled from 'styled-components';
import NamedButton from '@/components/button/NamedButton';
import PlayButton from '@/components/button/PlayButton';

const PlayNav = ({ movieInfo }) => {
  return (
    <Container>
      <NamedButton
        type="button"
        src="/icon/plusIcon.svg"
        buttonName="My List"
        link="/"
      />
      <PlayButton movieInfo={movieInfo} />
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
