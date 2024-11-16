import styled from 'styled-components';
import { CardProps } from './type';
import { FullCoveredImage } from './style';

const Card = ({ image, title }: CardProps) => {
  return (
    <CardContainer>
      <FullCoveredImage src={image} alt={title} />
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 6.375rem;
  height: 10rem;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
`;
