import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Collapse, Container, Navbar as BSNavbar, NavItem,
} from 'reactstrap';
import Scrollspy from 'react-scrollspy';

import ContactButton from 'components/ContactButton';
import AnchorLink from 'components/AnchorLink';
import logo from 'images/logo.png';
import './scss/Navbar.scss';

const Navbar = ({ solid }) => {
  const className = classNames('Navbar', {
    'Navbar--solid': solid,
  });
  const linkNames = ['Intro', 'Skillset', 'Values', 'Showcase', 'My Story'];
  const links = linkNames.map(name => ({
    name,
    url: kebabCase(name),
  }));

  return (
    <BSNavbar className={className} expand="lg" fixed="top">
      <Container>
        <AnchorLink href="#intro" className="navbar-brand mr-0">
          <img src={logo} alt="Logo" height="55" />
        </AnchorLink>
        <Collapse isOpen navbar>
          <Scrollspy
            className="navbar-nav ml-auto"
            currentClassName="active"
            items={links.map(link => link.url)}
            offset={-100}
          >
            {links.map(({ name, url }) => (
              <NavItem className={name === 'Intro' ? 'd-none' : ''} key={name}>
                <AnchorLink className="nav-link" href={`#${url}`}>
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
};

Navbar.defaultProps = {
  solid: false,
};

export default Navbar;
