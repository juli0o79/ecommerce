import styled, { keyframes, css } from 'styled-components';
import { CardImage, Image, Overlay } from '../atoms/Bannercard';

type Product = {
  id: string;
  src: string;
  description: string;
};

const Container = styled.section`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 90%), url('https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI') no-repeat center center;
  background-size: cover;
`;

const GradientFade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, transparent, #e8eae9);
`;

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50.55%);
  }
`;

const CarouselWrapper = styled.div<{ $animate: boolean }>`
  position: absolute;
  bottom: 24px;
  width: 100%;
  overflow: hidden;
`;

const CarouselTrack = styled.div<{ $animate: boolean }>`
  display: flex;
  gap: 24px;
  width: fit-content;
  min-width: 200%;
  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${scroll} 40s linear infinite;
    `}

  &:hover {
    animation-play-state: paused;
  }
`;

const ProductCard = styled(CardImage)`
  flex: 0 0 auto;
  width: 100%;
  max-width: 250px;
`;
const BannerText = styled.h2`
color: white;
`;
export default function ProductShowcase({ products }: { products: Product[] }) {
  const animate = products.length > 6;
  const itemsToRender = animate ? [...products, ...products] : products;

  return (
    <Container>
      <GradientFade />
      <CarouselWrapper $animate={animate}>
        <CarouselTrack $animate={animate}>
          {itemsToRender.map((product, index) => (
            <ProductCard key={index}>
              <Image src={product.src} alt={product.description} />
              <Overlay className="overlay">{product.description}</Overlay>
            </ProductCard>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </Container>
  );
}
