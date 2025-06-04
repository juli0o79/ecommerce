import React from 'react';
import styled from 'styled-components';
import { ImageSlider } from '../molecules/ImageSlider';
import { RatingStars } from '../molecules/RatingStars';
import { Price, Centavos } from '../atoms/PriceText';

const Card = styled.div`
  overflow: hidden;
  background-color: white;
  width: 312px;
  height: 342px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(32, 38, 36, 0.16);
  display: flex;
  flex-direction: column;
  font-family: 'Averta Std', sans-serif;
`;

const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #434645;
  font-weight: 400;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #999e9c;
  margin: 0;
`;

interface CardWithImageSliderProps {
  images?: string[];
  title: string;
  subtitle: string;
  price: number;
  rating: number;
}

export const CardWithImageSlider: React.FC<CardWithImageSliderProps> = ({
  images,
  title,
  subtitle,
  price,
  rating,
}) => {
  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  const priceParts = price.toFixed(2).split('.');
  const reais = priceParts[0];
  const centavos = priceParts[1];

  return (
    <Card>
      <ImageSlider images={images} />
      <Content>
        <Title>{truncate(title, 21)}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <RatingStars rating={rating} />
        <Price>
          R$ {reais}
          <Centavos>,{centavos}</Centavos>
        </Price>
      </Content>
    </Card>
  );
};
