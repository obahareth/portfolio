import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import './scss/Value.scss';

const Value = ({
  children, icon, title,
}) => (
  <div className="Value">
    <h4>
      <span className="Value__icon">
        <Icon name={icon} />
      </span>
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
