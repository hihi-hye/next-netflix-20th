import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  height: 48px;
  padding: 8px 29px 5px 26px;
  background: #121212;
`;

export const MenuItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;
`;

export const Text = styled.p<{ isActive: boolean }>`
  margin: 0;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#8C8787")};
  font-size: 8.2px;
  font-weight: 500;
  letter-spacing: 0.25999999046325684px;
  text-align: center;
`;
