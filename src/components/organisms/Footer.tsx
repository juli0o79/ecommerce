import React from 'react';
import styled from 'styled-components';

interface FooterProps {
    columns: string[][];
}

const FooterContainer = styled.div`
  width: 100vw;
  background-color: #131313;
  color: white;
  padding: 40px 20px;
  display: block;
  position: absolute;
  bottom:0px;
  left: 0px;
`;

const FooterBox = styled.div`
  max-width: 1080px;
  margin: auto;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
   @media (max-width: 600px) {
    align-items: center;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Row = styled.div`
  font-weight: normal;
`;

const Footer: React.FC<FooterProps> = ({ columns }) => {
    return (
        <FooterContainer>
            <FooterBox>
                <ColumnsWrapper>
                    {columns.map((col, index) => (
                        <Column key={index}>
                            <Title>{col[0]}</Title>
                            {col.slice(1).map((item, idx) => (
                                <Row key={idx}>{item}</Row>
                            ))}
                        </Column>
                    ))}
                </ColumnsWrapper>
            </FooterBox>

        </FooterContainer>
    );
};

export default Footer;
