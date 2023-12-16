import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElementss';

const Sidebar = ({ isOpen, toggle, toggleHome }) => {
  const handleSidebarLinkClick = (to) => {
    toggle(); // Close the sidebar when a link is clicked
    if (to === 'top') {
      scroll.scrollToTop({ smooth: true });
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={() => handleSidebarLinkClick('about')}>About</SidebarLink>
          <SidebarLink to="/discover" onClick={() => handleSidebarLinkClick('discover')}>Features</SidebarLink>
          <SidebarLink to="/services" onClick={() => handleSidebarLinkClick('services')}>Our Platform</SidebarLink>
          <SidebarLink to="/signup" onClick={() => handleSidebarLinkClick('signup')}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
