import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 24px;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 25px;

  margin: 0 18px;
`;

const MenuItem = styled.p`
  color: white;
  font-size: 17.2px;
  font-weight: 400;
  line-height: 30.45px;
  letter-spacing: 0.7622978687286377px;
`;

export default function TNB() {
  const pathname = usePathname();

  if (pathname !== '/home') {
    return null;
  }

  return (
    <Container>
      <Image src="/logo.png" alt="logo" width={56.67} height={57} />

      <MenuItem>TV Shows</MenuItem>
      <MenuItem>Movies</MenuItem>
      <MenuItem>My List</MenuItem>
    </Container>
  );
}
