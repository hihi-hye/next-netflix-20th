import styled from 'styled-components';
import { CardProps } from './type';
import { FullCoveredImage } from './style';

const RoundCard = ({ image, title }: CardProps) => {
  return (
    <CardContainer>
      <FullCoveredImage
        src={image}
        alt={title}
      />
    </CardContainer>
  );
};

export default RoundCard;

const CardContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;
