import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line
import { default as OriginalAnchorLink } from 'react-anchor-link-smooth-scroll';

const AnchorLink = ({ children, className, href }) => (
  <OriginalAnchorLink className={className} offset={80} href={href}>
    {children}
  </OriginalAnchorLink>
);

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

AnchorLink.defaultProps = {
  className: undefined,
};

export default AnchorLink;
