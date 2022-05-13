import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 30px;

  height: 650px;

  position: relative;
  z-index: 1;

  font-family: 'Roboto', sans-serif;

  background: #fff;

  &::before {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: #fff;

    z-index: 2;
  }

`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  position: absolute;
  z-index: 3;

  max-width: 1200px;
`;

export const HeroImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 30%;

  &:hover {
    @keyframes float{
      100% {
        transform:translatey(0)
      }
      50% {
        transform:translatey(-15px)
      }
    }

    animation: float 2s ease-in-out infinite;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const HeroH1 = styled.h1`
  margin-top: 50px;

  font-size: 2.5rem;

  color: #3A3A3A;
`;

export const HeroP = styled.p`
  margin-top: -10px;

  font-size: 0.9rem;
  font-weight: bold;

  color: #838383;
`;

export const SocialMediaContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.div`
  padding-top: 10px;
`;

export const SocialIconLink = styled(Link)`
  padding-left: 10px;

  font-size: 30px;

  svg {
    transition: 0.2s;

    &#image-1 {
      padding: 5px;

      border-radius: 50%;

      color: #fff;
      background-color: #4F6AA2;
    }

    &#image-2 {
      padding: 5px;

      border-radius: 50%;

      color: #fff;
      background-color: #000;
    }

    &#image-3 {
      padding: 5px;

      border-radius: 50%;

      color: #fff;
      background-color: #3BD776;
    }

    &#image-4 {
      padding: 5px;

      border-radius: 50%;

      color: #fff;
      background-color: #EC564A;
    }

    &:hover {
      transform: scale(1.2);
    }
  }
`;
