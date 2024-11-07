import { ReactNode } from "react";
import styled from "styled-components";

// height만 자동으로 변합니다
const Cotnainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 375px;
  height: 100svh;
  max-height: 812px;
  background: black;
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
    <Cotnainer>
      <Content>{children}</Content>

      <BottomBar>
        <Indicator />
      </BottomBar>
    </Cotnainer>
  );
}
