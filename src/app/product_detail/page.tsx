'use client';
import { CardWithImageSlider } from '@/components/organisms/CardwithImageSlider';
import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
width: 300px;
height: 300px;
background-color: red;

`;

function page() {
    const images = [
    'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
    'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
  ];

  return <CardWithImageSlider images={images}  title="Cadeira de escritório - Loyal Trend"
      subtitle="Ergonômica com apoio"
      rating={4}
      price={399.99}/>;
}

export default page