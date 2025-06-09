import styled from 'styled-components';

const UserIconWrapper = styled.svg`
  height: 42px;
  width: auto;
  color: white;
`;

export default function UserLoginIcon() {
  return (
    <UserIconWrapper
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a9.5 9.5 0 0 1 13 0" />
    </UserIconWrapper>
  );
}
