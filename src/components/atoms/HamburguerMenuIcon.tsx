import { renderElementsNumber } from '@/Utils/RenderElementsNumber';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
`;

const Line = styled.div`
  width: 28px;
  height: 4px;
  background-color: white;
  border-radius: 2px;
`;

export default function HamburgerIcon() {
  return (
    <HamburgerWrapper>
      {renderElementsNumber(3, <Line/>) }
    </HamburgerWrapper>
  );
}
