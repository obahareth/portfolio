import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <div>
    <h1 style={{ margin: 0 }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
