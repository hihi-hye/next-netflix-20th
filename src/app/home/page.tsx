'use client';

import Card from './_components/RoundCard';
import styled from 'styled-components';

const Home = () => {
  const items = [
    { image: '/movie1.jpg', title: 'Movie 1' },
    { image: '/movie2.jpg', title: 'Movie 2' },
    { image: '/movie3.jpg', title: 'Movie 3' },
    { image: '/movie4.jpg', title: 'Movie 4' },
    { image: '/movie5.jpg', title: 'Movie 5' },
  ];

  return (
    <HomeContainer>
      {items.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  width: 375px;
  margin: 1rem;
  background: black;

  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
