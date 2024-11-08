'use client';

import RoundCard from './_components/RoundCard';
import Card from './_components/Card';
import { CardContainer } from './style';
import ScreenWrapper from '@/components/ScreenWrapper';

const Home = () => {
  const items = [
    { image: '/movie1.jpg', title: 'Movie 1' },
    { image: '/movie2.jpg', title: 'Movie 2' },
    { image: '/movie3.jpg', title: 'Movie 3' },
    { image: '/movie4.jpg', title: 'Movie 4' },
    { image: '/movie5.jpg', title: 'Movie 5' },
  ];

  return (
    <ScreenWrapper>
      <CardContainer>
        {items.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </CardContainer>
      <CardContainer>
        {items.map((item, index) => (
          <RoundCard
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </CardContainer>
    </ScreenWrapper>
  );
};

export default Home;
