import range from 'lodash/range';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import './scss/Heading.scss';

const Heading = ({ children, icon, size }) => {
  const TitleTag = `h${size}`;

  return (
    <TitleTag className="Heading">
      {icon && (
        <span className="Heading__icon">
          <Icon name={icon} />
        </span>
      )}
      {children}
    </TitleTag>
  );
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOf(range(1, 6)).isRequired,
};

Heading.defaultProps = {
  icon: undefined,
};

export default Heading;
