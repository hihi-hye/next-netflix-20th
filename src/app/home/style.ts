import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background: black;
  margin: 1rem;
  margin-right: 0;

  overflow: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
