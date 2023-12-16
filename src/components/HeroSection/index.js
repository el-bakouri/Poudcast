import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowRight, ArrowForward } from './HeroElements'; // Adjust the path accordingly

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Trésors Murmurés</HeroH1>
        <HeroP>
        Discover the Invisible Stories for the Curious Ear at an exceptional price of $25. Sign up today and take advantage of our special offer.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup'
           onMouseEnter={onHover}
           onMouseLeave={onHover}
          
           >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;