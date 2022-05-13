import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 10;

  margin-top: -80;

  height: 100px;

  font-family: 'Roboto', sans-serif;

  background-color: #fff;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 24px;

  height: 80px;
  width: 100%;
  max-width: 1600px;

  z-index: 1;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  align-items: center;

  margin-left: 24px;

  justify-self: flex-start;

  cursor: pointer;

  font-size: 1.5rem;
  font-weight: bold;

  text-decoration: none;
`;

export const NavImg = styled.img`
  width: 10%;

  transition: 0.2s;

  &:hover {
    transform: scale(0.9);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;

    position: absolute;
    top: 0;
    right: 0;

    transform: translate(-100%, 60%);

    font-size: 1.8rem;

    cursor: pointer;

    color: #5800CC;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  margin-right: -22px;

  text-align: center;

  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;

  border-right: 1px solid #54595f;

  height: 10px;

  &:last-child {
    border: 0;
  }
`;

export const NavLinks = styled(LinkScroll)`
  display: flex;
  align-items: center;

  padding: 0 1.5rem;

  height: 100%;

  font-size: 1rem;
  font-weight: bold;

  text-decoration: none;

  cursor: pointer;

  color: #54595f;

  transition: 0.2s;

  &:hover {
    color: #5800CC;
  }
`;
