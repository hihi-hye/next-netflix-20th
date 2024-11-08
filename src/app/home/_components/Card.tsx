import styled from 'styled-components';

type Card = {
  image: string;
  title: string;
};

const Card = ({ image, title }: Card) => {
  return (
    <CardContainer>
      <Image
        src={image}
        alt={title}
      />
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
