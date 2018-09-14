import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line
import { default as OriginalAnchorLink } from 'react-anchor-link-smooth-scroll';

const AnchorLink = ({ children, href }) => (
  <OriginalAnchorLink offset={80} className="nav-link" href={href}>
    {children}
  </OriginalAnchorLink>
);

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default AnchorLink;
