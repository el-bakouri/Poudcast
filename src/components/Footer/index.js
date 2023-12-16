import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  SocialIcons,
  SocialIconLink,
  FooterText,
  FooterBtn,
  FooterBtnLink,
} from './FooterElements';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo to="/" onClick={toggleHome}>
          <span>Pod</span>cast
        </FooterLogo>
        <SocialIcons>
          <SocialIconLink href="#" target="_blank">
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href="#" target="_blank">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="mailto:elbakourizouhir1@gmail.com" target="_blank">
            <FaEnvelope />
          </SocialIconLink>
        </SocialIcons>
        <FooterText>&copy; {new Date().getFullYear()} Zouhir El-Bakouri</FooterText>
        <FooterBtn>
          <FooterBtnLink to="/contact">Contact Us</FooterBtnLink>
        </FooterBtn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
