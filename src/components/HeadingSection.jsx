import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';

const HeadingSection = ({
  children, size, icon, title,
}) => (
  <div className="mb-5 mb-lg-4">
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
