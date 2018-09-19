import PropTypes from 'prop-types';
import React from 'react';

import Scrollspy from 'components/Scrollspy';
import { NAV_LINKS } from 'constants';

const NavScrollspy = ({ className, mapItems }) => (
  <Scrollspy
    className={className}
    items={NAV_LINKS.map(link => link.href)}
  >
    {NAV_LINKS.map(mapItems)}
  </Scrollspy>
);

NavScrollspy.propTypes = {
  className: PropTypes.string,
  mapItems: PropTypes.func.isRequired,
};

NavScrollspy.defaultProps = {
  className: undefined,
};

export default NavScrollspy;
