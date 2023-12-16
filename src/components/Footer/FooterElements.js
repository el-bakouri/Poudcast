// FooterElements.js
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: #000;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLogo = styled(LinkR)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;

  span {
    color: #01bf71;
    margin-right: 5px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const FooterText = styled.p`
  color: #fff;
  font-size: 1rem;
`;

export const FooterBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #101606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
