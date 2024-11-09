import { ReactNode } from "react";
import styled from "styled-components";
import TNB from "./TNB";
import BNB from "./BNB";

// height만 자동으로 변합니다
const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 375px;
  height: 100svh;
  max-height: 812px;
  background: black;

  margin: 0 auto;
  overflow: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const BottomBar = styled.div`
  position: relative;
  display: flex;
  height: 31.7px;
`;

const Indicator = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: calc(9.09px - (4.53px / 2));

  width: 121.38px;
  height: 4.53px;
  background: white;
  border-radius: 4.53px;
`;

export default function ScreenWrapper({ children }: { children: ReactNode }) {
  return (
    <Container>
      <TNB />
      <Content>{children}</Content>

      <BNB />
      <BottomBar>
        <Indicator />
      </BottomBar>
    </Container>
  );
}
