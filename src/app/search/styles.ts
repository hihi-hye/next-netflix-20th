import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 52px;
  margin-top: 44px;
  padding: 10px 20px;
  background: #424242;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  height: 31px;
  border: none;
  outline: none;

  color: #ffffff;
  font-size: 15.21px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.20666667819023132px;
`;

export const TransparentButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
