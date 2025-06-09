import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../atoms/LogoIcon';
import SearchInput from '../molecules/SearchInput';
import MarketCartIcon from '../atoms/CartIcon';
import MobileIcon from '../atoms/MobileLogo';
import HamburgerIcon from '../atoms/HamburguerMenuIcon';
import UserLoginIcon from '../atoms/UserLoginIcon';

export const HeaderContainer = styled.div`
  top: 0;
  width: 100vw;
  position: fixed;
  height: 80px;
  background-color: #131313;
  z-index: 2;
  left: 0px;
`;

export const Content = styled.div`
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: auto;
`;

function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check
    handleResize();

    // Event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderContainer>
      <Content>
        {isMobile ? (
          <>
            <MobileIcon />
           <SearchInput />
            <HamburgerIcon/>
          </>
         
        ) : (
          <>
            <Logo />
            <SearchInput />
            <UserLoginIcon />
            <MarketCartIcon />
          </>
        )}
      </Content>
    </HeaderContainer>
  );
}

export default Header;
