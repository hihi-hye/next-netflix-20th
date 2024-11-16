'use client';

import LargeGradientCard from '@/components/LargeGradientCard';
import ScreenWrapper from '@/components/ScreenWrapper';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 36px;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 5.63px;

  font-size: 20.46px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.06119999662041664px;
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 26.75px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.07339449226856232px;
`;

const Content = styled.p`
  margin: 0;
  color: white;
  font-size: 11.14px;
  font-weight: 400;
  line-height: 14.17px;
  letter-spacing: -0.030563583597540855px;
`;

export default function DetailScreen({
  data,
}: {
  data: { title: string; poster_path: string; overview: string };
}) {
  return (
    <ScreenWrapper>
      <LargeGradientCard
        key={'index'}
        image={`${process.env.IMAGE_BASE_URL}w1280/${data.poster_path}`}
        title={data.title}
      />

      <InfoWrapper>
        <Button>Play</Button>
        <Title>{data.title}</Title>
        <Content>{data.overview}</Content>
      </InfoWrapper>
    </ScreenWrapper>
  );
}
