import PropTypes from 'prop-types';
import React from 'react';
import Plx from 'react-plx';

const isSmallScreen = window.screen.availHeight < 900;

const parallaxData = [
  {
    start: 0,
    end: isSmallScreen ? 600 : 500,
    easing: isSmallScreen ? 'easeIn' : undefined,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
      {
        startValue: 1,
        endValue: -50,
        property: 'translateY',
      },
    ],
  },
];

const Parallax = ({ children }) => (
  <Plx parallaxData={parallaxData}>
    {children}
  </Plx>
);

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Parallax;
