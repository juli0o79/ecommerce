import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ButtonArrow } from '../atoms/ButtonArrow';
import { getWindowWidth } from '@/Utils/GetWindowWidth';

const ImageContainer = styled.div<{ $hasimages: boolean }>`
  width: 100%;
  height: 392px;
  background-color: ${({ $hasimages }) => ($hasimages ? '#f0f0f0' : '#d3d3d3')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const SliderWrapper = styled.div<{ translatex: number; $isdragging: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${(props) => props.translatex}%);
  transition: ${(props) => (props.$isdragging ? 'none' : 'transform 0.3s ease-in-out')};
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
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const hasImages = images && images.length > 0;

  const startX = useRef<number | null>(null);

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

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current !== null) {
      const delta = e.touches[0].clientX - startX.current;
      setDragOffset(delta);
      // ❗️Não precisa mais do preventDefault
    }
  };

  const onTouchEnd = () => {
    if (startX.current !== null) {
      const threshold = 50; // mínimo para considerar como swipe
      if (dragOffset < -threshold) {
        handleNext();
      } else if (dragOffset > threshold) {
        handlePrev();
      }
    }
    setDragOffset(0);
    setIsDragging(false);
    startX.current = null;
  };

  const windowWidth = getWindowWidth();
  const totalTranslate = -currentIndex * 100 + (dragOffset / windowWidth) * 100;

  return (
    <ImageContainer
      $hasimages={!!hasImages}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'pan-y' }} // ✅ permite scroll vertical e bloqueia swipe horizontal
    >
      {hasImages ? (
        <>
          <ButtonArrow style={{ left: 8 }} onClick={handlePrev}>
            &lt;
          </ButtonArrow>
          <SliderWrapper translatex={totalTranslate} $isdragging={isDragging}>
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
