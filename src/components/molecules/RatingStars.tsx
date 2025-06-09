import React from 'react';
import { Star } from '../atoms/Star';
import styled from 'styled-components';

interface RatingStarsProps {
  rating: number;
}

const RatingContainer = styled.div`
  display: flex;
  gap: 4px;
`;


export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <RatingContainer>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} $filled={i < rating}>
          {i < rating ? '★' : '☆'}
        </Star>
      ))}
    </RatingContainer>
  );
};
