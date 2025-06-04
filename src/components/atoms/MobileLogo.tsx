import styled from 'styled-components';

const MobileIconWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial Black', sans-serif;
  font-size: 24px;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  background: transparent;
`;

export default function MobileIcon() {
  return <MobileIconWrapper>E</MobileIconWrapper>;
}
