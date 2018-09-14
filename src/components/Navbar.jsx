import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse, Container, Nav, Navbar as BSNavbar, NavItem,
} from 'reactstrap';

import ContactButton from 'components/ContactButton';
import AnchorLink from 'components/AnchorLink';
import logo from 'images/logo.png';
import './scss/Navbar.scss';

const Navbar = ({ solid }) => {
  const className = classNames('Navbar', {
    'Navbar--solid': solid,
  });

  return (
    <BSNavbar className={className} expand="lg" fixed="top">
      <Container>
        <AnchorLink href="#welcome" className="navbar-brand mr-0">
          <img src={logo} alt="Logo" height="55" />
        </AnchorLink>
        <Collapse isOpen navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AnchorLink className="nav-link" href="#skillset">
                Skillset
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink className="nav-link" href="#values">
                Values
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink className="nav-link" href="#showcase">
                Showcase
              </AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink className="nav-link" href="#my-story">
                My story
              </AnchorLink>
            </NavItem>
          </Nav>
          <ContactButton />
        </Collapse>
      </Container>
    </BSNavbar>
  );
};

Navbar.propTypes = {
  solid: PropTypes.bool,
};

Navbar.defaultProps = {
  solid: false,
};

export default Navbar;
