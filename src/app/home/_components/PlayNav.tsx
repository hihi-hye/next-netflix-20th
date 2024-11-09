import styled from 'styled-components';
import NamedButton from '@/components/button/NamedButton';
import PlayButton from '@/components/button/PlayButton';
import { MovieProps } from '@/types/MovieProps';

const PlayNav = ({ movie }: { movie: MovieProps }) => {
  return (
    <>
      <TopTen>
        <div className="topTenIcon">
          <p className="top">Top</p>
          <p className="ten">10</p>
        </div>
        <div className="title">#2 in Nigeria Today</div>
      </TopTen>
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
    </>
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

const TopTen = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  margin: 0 auto;
  margin-bottom: 1rem;

  color: #ffffff;

  .title {
    font-size: 14px;
  }
  .topTenIcon {
    display: flex;
    margin: 0.1rem;

    flex-direction: column;
    font-size: 13.72px;
    font-weight: 700;
    text-align: center;

    width: 14px;
    height: 14px;
    border: 1px solid white;

    .top {
      font-size: 4.36px;
      margin: 0;
    }
    .ten {
      font-size: 6.86px;
      margin: 0;
    }
  }
`;
