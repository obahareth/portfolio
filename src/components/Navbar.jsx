import Link from 'gatsby-link';
import React from 'react';
import {
  Button, Collapse, Nav, Navbar as BSNavbar, NavItem, NavLink,
} from 'reactstrap';

import logo from 'images/logo.png';

const Navbar = () => (
  <BSNavbar color="light" light expand="lg">
    <Link to="/" className="navbar-brand mr-0">
      <img src={logo} alt="Logo" height="50" />
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
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            My Story
          </NavLink>
        </NavItem>
      </Nav>
      <Button color="primary">
        Get In Touch
      </Button>
    </Collapse>
  </BSNavbar>
);

export default Navbar;
