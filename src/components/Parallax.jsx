import PropTypes from 'prop-types';
import React from 'react';
import Plx from 'react-plx';

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      easing: undefined,
      time: 500,
    };
  }

  componentDidMount() {
    const isSmallScreen = window.innerHeight < 900;

    if (isSmallScreen) {
      this.setState({
        easing: 'easeIn',
        time: 600,
      });
    }
  }

  render() {
    const { easing, time } = this.state;
    const { children } = this.props;
    const parallaxData = [
      {
        start: 0,
        end: time,
        easing,
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

    return (
      <Plx parallaxData={parallaxData}>
        {children}
      </Plx>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Parallax;
