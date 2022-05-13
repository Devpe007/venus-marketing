import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaVoicemail,
} from 'react-icons/fa';

import venus from '../../images/venus.png';

import {
  HeroContainer,
  HeroImg,
  Img,
  HeroContent,
  TextContent,
  HeroH1,
  HeroP,
  SocialMediaContent,
  SocialIcons,
  SocialIconLink,
} from './HeroSectionElements';

function HeroSection() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroImg>
          <Img src={venus} alt="logo venus" />
        </HeroImg>

        <TextContent>
          <HeroH1>Bem-Vindo(a)</HeroH1>
          <HeroP>
            Trabalhando sempre para deixar você em primeiro lugar!
            <br />
            Siga nossas redes sociais. Fique por dentro!
          </HeroP>
        </TextContent>

        <SocialMediaContent>
          <SocialIcons>
            <SocialIconLink
              to="/"
            >
              <FaFacebook id="image-1" />
            </SocialIconLink>
            <SocialIconLink
              to="/"
            >
              <FaInstagram id="image-2" />
            </SocialIconLink>
            <SocialIconLink
              to="/"
            >
              <FaWhatsapp id="image-3" />
            </SocialIconLink>
            <SocialIconLink
              to="/"
            >
              <FaVoicemail id="image-4" />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaContent>

      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
