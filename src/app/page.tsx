'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import netflixLogo from './netflixLogo.json';

import ScreenWrapper from '@/components/ScreenWrapper';
import { LottieWrapper } from './styles';

export default function Home() {
  const router = useRouter();

  function goHome() {
    router.replace('/home');
  }

  return (
    <ScreenWrapper>
      <LottieWrapper>
        <Lottie
          loop={false}
          animationData={netflixLogo}
          play
          onComplete={goHome}
        />
      </LottieWrapper>
    </ScreenWrapper>
  );
}
