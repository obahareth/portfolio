import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './scss/Section.scss';

const PADDING_LARGE = 'large';
const PADDING_SMALL = 'small';

const Section = ({
  children, bgStars, gray, id, padding, roundedBottom, roundedTop,
}) => {
  const className = classNames('Section', {
    'Section--bg-stars': bgStars,
    'Section--gray': gray,
    'Section--padding-large': padding === PADDING_LARGE,
    'Section--padding-small': padding === PADDING_SMALL,
    'Section--rounded-bottom': roundedBottom,
    'Section--rounded-top': roundedTop,
  });

  return (
    <section className={className} id={id}>
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
  id: PropTypes.string,
  padding: PropTypes.oneOf([PADDING_LARGE, PADDING_SMALL]),
  roundedBottom: PropTypes.bool,
  roundedTop: PropTypes.bool,
};

Section.defaultProps = {
  bgStars: false,
  gray: false,
  id: undefined,
  padding: undefined,
  roundedBottom: false,
  roundedTop: false,
};

export default Section;
