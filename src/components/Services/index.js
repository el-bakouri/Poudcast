import React from 'react';
import Icon1 from '../../images/icon1.jpg';
import Icon2 from '../../images/icon2.jpg';
import Icon3 from '../../images/icon3.jpg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'; // Make sure to import your styled components

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Platform</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} /> {/* Corrected the icon name */}
          <ServicesH2>CREATE</ServicesH2>
          <ServicesP>Unlimited episodes for all.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>DISTRIBUTE</ServicesH2>
          <ServicesP>Publish your content everywhere.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>MONETIZE</ServicesH2>
          <ServicesP>We're here to make you money.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

