import { MovieProps } from "@/types/MovieProps";
import Link from "next/link";
import styled from "styled-components";

// 전역으로 뺀 이유 : 영화 상세페이지에서 길게 또 쓰임
const PlayButton = ({ movie }: { movie: MovieProps }) => {
  return (
    <Link href={`/movie/${id}` || "/"}>
    <StyledLink href={`/movie/${movie.id}` || '/'}>
      <StyledPlayButton>
        <img src="/icon/playIcon.png" alt="play icon" />
        <span>Play</span>
      </StyledPlayButton>
    </StyledLink>
  );
};

export default PlayButton;

const StyledLink = styled(Link)`
  text-decoration: none; // Link 자체에 스타일 적용
`;
const StyledPlayButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  gap: 0.2rem;
  background-color: #c0c0c0;
  border-radius: 0.25rem;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
    width: 1rem;
    height: auto;
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
`;
