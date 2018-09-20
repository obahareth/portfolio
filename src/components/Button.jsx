import PropTypes from 'prop-types';
import React from 'react';
import { Button as BSButton } from 'reactstrap';

import Icon from 'components/Icon';
import './scss/Button.scss';

const Button = ({
  children, className, icon, ...otherProps
}) => (
  <BSButton className={`Button ${className}`} {...otherProps}>
    {icon && <Icon name={icon} />}
    {children}
  </BSButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  icon: undefined,
};

export default Button;
