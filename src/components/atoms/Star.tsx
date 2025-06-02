import styled from 'styled-components';

export const Star = styled.span<{ filled: boolean }>`
  color: ${({ filled }) => (filled ? '#FFD700' : '#ccc')};
  font-size: 16px;
`;