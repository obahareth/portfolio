import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import './scss/SocialLink.scss';

const SocialLink = ({ icon, to }) => (
  <a className="SocialLink" href={to} target="_blank" rel="noopener noreferrer">
    <Icon name={icon} />
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default SocialLink;
