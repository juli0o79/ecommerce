import styled from 'styled-components';

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  height: auto;
  aspect-ratio: 5 / 6;
  overflow: hidden;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);

    .overlay {
      opacity: 1;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
