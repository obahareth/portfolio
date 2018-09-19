import PropTypes from 'prop-types';
import React from 'react';
import OriginalScrollspy from 'react-scrollspy';

const Scrollspy = ({ children, className, items }) => (
  <OriginalScrollspy
    className={className}
    currentClassName="active"
    items={items}
    offset={-100}
  >
    {children}
  </OriginalScrollspy>
);

Scrollspy.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Scrollspy.defaultProps = {
  className: undefined,
};

export default Scrollspy;
