import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './scss/Section.scss';

const PADDING_LARGE = 'large';
const PADDING_SMALL = 'small';

const Section = ({
  children, bgStars, gray, padding, roundedBottom,
}) => {
  const className = classNames('Section', {
    'Section--bg-stars': bgStars,
    'Section--gray': gray,
    'Section--padding-large': padding === PADDING_LARGE,
    'Section--padding-small': padding === PADDING_SMALL,
    'Section--rounded-bottom': roundedBottom,
  });

  return (
    <section className={className}>
      {children}
    </section>
  );
};

Section.PADDING_LARGE = PADDING_LARGE;
Section.PADDING_SMALL = PADDING_SMALL;

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgStars: PropTypes.bool,
  gray: PropTypes.bool,
  padding: PropTypes.oneOf([PADDING_LARGE, PADDING_SMALL]),
  roundedBottom: PropTypes.bool,
};

Section.defaultProps = {
  bgStars: false,
  gray: false,
  padding: undefined,
  roundedBottom: false,
};

export default Section;
