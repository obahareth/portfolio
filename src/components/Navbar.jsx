import Link from 'gatsby-link';
import React from 'react';
import {
  Collapse, Container, Nav, Navbar as BSNavbar, NavItem, NavLink,
} from 'reactstrap';

import ContactButton from 'components/ContactButton';
import logo from 'images/logo.png';
import './scss/Navbar.scss';

const Navbar = () => (
  <BSNavbar className="Navbar" expand="lg" fixed="top">
    <Container>
      <Link to="/" className="navbar-brand mr-0">
        <img src={logo} alt="Logo" height="55" />
      </Link>
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">
              Skillset
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Values
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              Showcase
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              My story
            </NavLink>
          </NavItem>
        </Nav>
        <ContactButton />
      </Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
