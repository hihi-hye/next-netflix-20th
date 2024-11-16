import styled from 'styled-components';
import { CardProps } from '@/app/home/_components/type';
import { FullCoveredImage } from '@/app/home/_components/style';

const LargeGradientCard = ({ image, title }: CardProps) => {
  return (
    <CardContainer>
      <FullCoveredImage src={image} alt={title} />
      <Overlay />
    </CardContainer>
  );
};

export default LargeGradientCard;

const CardContainer = styled.div`
  position: relative;

  width: 375px;
  height: 415px;
  gap: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 87.26%,
    #000000 100%
  );
  pointer-events: none;
`;
