import styled from 'styled-components';
import { ButtonProps } from '@/types/ButtonProps';

const Button = ({ text, src, type }: ButtonProps) => {
  return (
    <ButtonContainer
      className="w-full h-full text-center"
      type={type}
      //   onClick={onClick}
    >
      {src ? (
        <img
          src={src}
          alt={src}
        />
      ) : (
        text
      )}
    </ButtonContainer>
  );
};
export default Button;

const ButtonContainer = styled.button`
  all: unset;
`;
