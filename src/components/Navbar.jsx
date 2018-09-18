import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse, Container, Navbar as BSNavbar, NavItem,
} from 'reactstrap';
import Scrollspy from 'react-scrollspy';

import AnchorLink from 'components/AnchorLink';
import ContactButton from 'components/ContactButton';
import Icon from 'components/Icon';
import { NAV_LINKS } from 'constants';
import logo from 'images/logo.png';
import './scss/Navbar.scss';

const Navbar = ({ solid, toggleSidebar }) => {
  const className = classNames('Navbar', {
    'Navbar--solid': solid,
  });

  return (
    <BSNavbar className={className} expand="lg" fixed="top">
      <Container>
        <AnchorLink href="#intro" className="navbar-brand mr-0">
          <img src={logo} alt="Logo" height="55" />
        </AnchorLink>
        <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
          <div className="d-flex align-items-center">
            <Icon name="menu" />
          </div>
        </button>
        <Collapse navbar>
          <Scrollspy
            className="navbar-nav ml-auto"
            currentClassName="active"
            items={NAV_LINKS.map(link => link.href)}
            offset={-100}
          >
            {NAV_LINKS.map(({ name, href }) => (
              <NavItem className={name === 'Intro' ? 'd-none' : ''} key={name}>
                <AnchorLink className="nav-link" href={`#${href}`}>
                  {name}
                </AnchorLink>
              </NavItem>
            ))}
          </Scrollspy>
          <ContactButton />
        </Collapse>
      </Container>
    </BSNavbar>
  );
};

Navbar.propTypes = {
  solid: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  solid: false,
};

export default Navbar;
