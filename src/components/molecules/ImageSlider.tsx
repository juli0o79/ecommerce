import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonArrow } from '../atoms/ButtonArrow';

const ImageContainer = styled.div<{ hasImages: boolean }>`
  width: 100%;
  height: 192px;
  background-color: ${({ hasImages }) => (hasImages ? '#f0f0f0' : '#d3d3d3')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SliderWrapper = styled.div<{ translatex: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => props.translatex}%);
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FallbackMessage = styled.p`
  color: #666;
  font-size: 14px;
  padding: 8px;
  text-align: center;
`;

interface ImageSliderProps {
  images?: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images && images.length > 0;

  const handlePrev = () => {
    if (images) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (images) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <ImageContainer hasImages={!!hasImages}>
      {hasImages ? (
        <>
          <ButtonArrow style={{ left: 8 }} onClick={handlePrev}>
            &lt;
          </ButtonArrow>
          <SliderWrapper translatex={-currentIndex * 100}>
            {images.map((src, index) => (
              <Slide key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </SliderWrapper>
          <ButtonArrow style={{ right: 8 }} onClick={handleNext}>
            &gt;
          </ButtonArrow>
        </>
      ) : (
        <FallbackMessage>Awaiting images to display...</FallbackMessage>
      )}
    </ImageContainer>
  );
};
