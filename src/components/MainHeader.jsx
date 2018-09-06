import PropTypes from 'prop-types';
import React from 'react';

import './scss/MainHeader.scss';

const MainHeader = ({
  avatar, children, subtitle, title,
}) => (
  <header className="MainHeader">
    <img
      className="MainHeader__avatar img-fluid rounded-circle mb-5"
      src={avatar}
      alt="Daniel Spajic"
    />
    <h1>
      {title}
    </h1>
    <h3 className="mb-4">
      {subtitle}
    </h3>
    {children}
  </header>
);

MainHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainHeader;
