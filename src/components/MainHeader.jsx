import PropTypes from 'prop-types';
import React from 'react';

import Parallax from 'components/Parallax';
import './scss/MainHeader.scss';

const MainHeader = ({
  avatar, children, subtitle, title,
}) => (
  <Parallax>
    <header className="MainHeader">
      <img
        className="MainHeader__avatar img-fluid rounded-circle mb-5"
        src={avatar}
        alt="Daniel Spajic"
      />
      <h1 className="MainHeader__title">
        {title}
      </h1>
      <h3 className="MainHeader__subtitle">
        {subtitle}
      </h3>
      {children}
    </header>
  </Parallax>
);

MainHeader.propTypes = {
  avatar: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainHeader;
