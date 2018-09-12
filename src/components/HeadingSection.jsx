import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';
import './scss/HeadingSection.scss';

const HeadingSection = ({
  children, size, icon, title,
}) => (
  <div className="HeadingSection">
    <Heading icon={icon} size={size}>
      {title}
    </Heading>
    {children}
  </div>
);

HeadingSection.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeadingSection;
