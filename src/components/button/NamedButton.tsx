import Link from 'next/link';
import styled from 'styled-components';
import Button from './Button';
import { ButtonProps } from '@/types/ButtonProps';

const NamedButton = ({ type, src, buttonName, link = '/' }: ButtonProps) => {
  return (
    <Link href={link}>
      <StyledNamedButton>
        <Button type={type} src={src} />
        <div className="buttonName">{buttonName}</div>
      </StyledNamedButton>
    </Link>
  );
};

export default NamedButton;

const StyledNamedButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  .buttonName {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 13px;
    font-weight: 400;
    font-weight: 500;
    color: #fff;
    margin-top: 0.25rem;
    text-decoration: none;
  }
`;
