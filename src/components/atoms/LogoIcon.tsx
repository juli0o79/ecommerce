import styled from 'styled-components';

const Ecommerce = styled.div`
  width: 160px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial Black', sans-serif;
  font-size: 24px;
  color: white;
  background: transparent;
`;

export default function Logo() {
  return <Ecommerce>Ecommerce</Ecommerce>;
}