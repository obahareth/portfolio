import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './scss/Section.scss';

const Section = ({ children, gray, roundedBottom }) => {
  const className = classNames('Section', {
    'Section--gray': gray,
    'Section--rounded-bottom': roundedBottom,
  });

  return (
    <section className={className}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  gray: PropTypes.bool,
  roundedBottom: PropTypes.bool,
};

Section.defaultProps = {
  gray: false,
  roundedBottom: false,
};

export default Section;
