import PropTypes from 'prop-types';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import AnchorLink from 'components/AnchorLink';
import NavScrollspy from 'components/NavScrollspy';
import {
  CONTACT_EMAIL, PAGE_CONTENT_ID, PAGE_CONTENT_CONTAINER_ID,
} from 'constants';
import './scss/Sidebar.scss';

const onStateChange = (isOpen, toggle) => (newState) => {
  if (isOpen !== newState.isOpen) {
    toggle();
  }
};

const Sidebar = ({ isOpen, toggle }) => (
  <Menu
    className="Sidebar"
    isOpen={isOpen}
    pageWrapId={PAGE_CONTENT_ID}
    outerContainerId={PAGE_CONTENT_CONTAINER_ID}
    onStateChange={onStateChange(isOpen, toggle)}
    customBurgerIcon={false}
  >
    <NavScrollspy mapItems={({ name, href }) => (
      <AnchorLink
        className="Sidebar__link d-block"
        href={`#${href}`}
        key={name}
        onClick={toggle}
      >
        {name}
      </AnchorLink>
    )}
    />
    <a className="Sidebar__link" href={`mailto:${CONTACT_EMAIL}`}>
      Get In Touch
    </a>
  </Menu>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isOpen: false,
};

export default Sidebar;
