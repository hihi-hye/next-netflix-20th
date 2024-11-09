import { MovieProps } from "@/types/MovieProps";
import Link from "next/link";
import styled from "styled-components";

const PlayButton = ({ id }: MovieProps) => {
  return (
    <Link href={`/movie/${id}` || "/"}>
      <StyledPlayButton>
        <img src="/icon/playIcon.png" alt="play icon" />
        <span>Play</span>
      </StyledPlayButton>
    </Link>
  );
};

export default PlayButton;

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
    text-decoration: none;
  }
`;
