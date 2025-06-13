import styled from 'styled-components';

const CartIcon = styled.svg`
  height: 42px;
  width: auto;
  color: white;
`;

export default function MarketCartIcon() {
  return (
    <CartIcon
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
      height="16"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </CartIcon>
  );
}
