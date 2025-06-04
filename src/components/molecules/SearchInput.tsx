import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  min-width: 240px;
  height: 34px;
  background-color: white;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 6px;
  padding: 0 8px;
`;

const Icon = styled.svg`
  width: 16px;
  height: 16px;
  color: #9ca3af; /* gray-400 */
  margin-right: 8px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.875rem; /* text-sm */
  color: #111827; /* gray-900 */
  
  &::placeholder {
    color: #9ca3af; /* gray-400 */
  }
`;

export default function SearchInput() {
  return (
    <Container>
      <Icon
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </Icon>
      <Input placeholder="o que você está buscando" />
    </Container>
  );
}
