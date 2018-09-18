import PropTypes from 'prop-types';
import React from 'react';
import { default as OriginalAnchorLink } from 'react-anchor-link-smooth-scroll';

const AnchorLink = ({
  children, className, href, onClick,
}) => (
  <OriginalAnchorLink className={className} offset={80} href={href} onClick={onClick}>
    {children}
  </OriginalAnchorLink>
);

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

AnchorLink.defaultProps = {
  className: undefined,
  onClick: undefined,
};

export default AnchorLink;
