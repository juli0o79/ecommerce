import React from 'react';
import styled from 'styled-components';
import { ImageSlider } from '../molecules/ImageSlider';

const BackGround = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(32, 38, 36, 0.16);
  display: flex;
  flex-direction: column;
  font-family: 'Averta Std', sans-serif;
`;



interface BackgroundSliderProps {
  images?: string[];
}

export const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
  images,
}) => {
  return (
    <BackGround>
      <ImageSlider images={images} />
    </BackGround>
  );
};
