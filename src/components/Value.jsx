import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

const Value = ({
  children, icon, title,
}) => (
  <div>
    <h4>
      <Icon name={icon} />
      {title}
    </h4>
    <p>
      {children}
    </p>
  </div>
);

Value.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Value;
