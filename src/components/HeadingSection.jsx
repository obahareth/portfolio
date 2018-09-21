import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/Heading';

const HeadingSection = ({
  children, className, icon, noMargin, size, title,
}) => {
  const margin = noMargin ? '' : `mt-${size > 4 ? 4 : 5}`;

  return (
    <div className={`${className} ${margin}`}>
      <Heading icon={icon} size={size}>
        {title}
      </Heading>
      {children}
    </div>
  );
};

HeadingSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  noMargin: PropTypes.bool,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

HeadingSection.defaultProps = {
  className: '',
  noMargin: false,
};

export default HeadingSection;
