import PropTypes from 'prop-types';
import React from 'react';
import { Button as BSButton } from 'reactstrap';

import Icon from 'components/Icon';
import './scss/Button.scss';

const Button = ({ children, icon, ...otherProps }) => (
  <BSButton className="Button" {...otherProps}>
    {icon && <Icon name={icon} />}
    {children}
  </BSButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Button.defaultProps = {
  icon: undefined,
};

export default Button;
