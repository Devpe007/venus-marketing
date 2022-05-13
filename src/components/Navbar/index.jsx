import React from 'react';

import { FaBars } from 'react-icons/fa';

import logo from '../../images/logo.png';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <NavImg src={logo} alt="logo" />
        </NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="contacts"
            >
              Contatos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="meeting"
            >
              Agendar Reunião
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="blog"
            >
              Blog Venus
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
