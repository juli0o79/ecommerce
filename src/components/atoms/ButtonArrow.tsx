import styled from 'styled-components';

export const ButtonArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: none;
  border-radius: 100%;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  z-index: 1;
  color: #434645;
  width: 32px;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;
