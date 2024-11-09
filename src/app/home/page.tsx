'use client';

import RoundCard from './_components/RoundCard';
import Card from './_components/Card';
import { CardContainer } from './style';
import ScreenWrapper from '@/components/ScreenWrapper';
import { SubTitle, Title } from './_components/style';
import LargeGradientCard from './_components/LargeGradientCard';
import PlayNav from './_components/PlayNav';
import TNB from '@/components/TNB';

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
      <TNB />
      <LargeGradientCard
        key={'index'}
        image={items[3].image}
        title={items[3].title}
      ></LargeGradientCard>
      <PlayNav movieInfo={items[3]} />

      <Title>Previews</Title>
      <CardContainer>
        {items.map((item, index) => (
          <RoundCard
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </CardContainer>
      <SubTitle>Continue Watching for Emenalo</SubTitle>
      <CardContainer>
        {items.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </CardContainer>
      <SubTitle>Popular on Netflix</SubTitle>
      <CardContainer>
        {items.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
          />
        ))}
      </CardContainer>
    </ScreenWrapper>
  );
};

export default Home;
