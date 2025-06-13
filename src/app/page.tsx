'use client';
import Header from '@/components/organisms/HeaderContainer';
import { CardWithImageSlider } from '@/components/organisms/CardwithImageSlider';
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '@/components/organisms/Footer';
import ProductShowcase from '@/components/organisms/ProductShowCase';
const PageContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  margin: auto;
  padding-bottom: 320px;
   @media (max-width: 680px) {
    padding-bottom: 760px;
  }

`;

const Grid = styled.div`
  margin: 12px 0px;
  display: grid;
  grid-template-columns: repeat(3, 312px);
  gap: 72px;
  justify-content: center; /* Always center grid horizontally */

  div {
    width: 312px;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* If screen is less than 1080px, switch to 2 columns */
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 312px);
  }

  /* If screen is less than 680px, switch to 1 column */
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 312px);
  }
`;



function Home() {
  const images = [
    'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
    'https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI',
  ];

  useEffect(() => console.log('page is ready'), []);

  
const footerData = [
  ['Institutional', 'About Us', 'Careers', 'Contact'],
  ['Support', 'FAQ', 'Shipping', 'Returns'],
  ['Legal', 'Privacy Policy', 'Terms of Service'],
  ['Social', 'Facebook', 'Instagram', 'Twitter'],
];
  const fakeArray = Array(9).fill(null);
  return (
    <PageContainer>
      <Header>
      </Header>
      {/* <BackgroundSlider images={images} /> */}
      <ProductShowcase products={[
        {description: "product description", src: images[0], id:'product1'},
        {description: "product description", src: images[1], id:'product2'},
        {description: "product description", src: images[2], id:'product3'},
         {description: "product description", src: images[0], id:'product1'},
         {description: "product description", src: images[1], id:'product2'},
        {description: "product description", src: images[2], id:'product3'},
          {description: "product description", src: images[0], id:'product1'},
    ]} />
      <div style={{ width: '100%', marginTop: '624px' }}>
        <Grid>
          {fakeArray.map((_, index) => {
            return (
              <CardWithImageSlider key={index} images={images} title="Cadeira de escritório - Loyal Trend"
                subtitle="Ergonômica com apoio"
                rating={4}
                price={399.99} />
            )
          })}
        </Grid>
      </div >
      <Footer columns={footerData}/>
    </PageContainer>

  );
}

export default Home;