import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.setState({
      scrollTop: event.pageY,
    });
  }

  render() {
    const { render } = this.props;
    return (
      <div>
        {render(this.state)}
      </div>
    );
  }
}

App.propTypes = {
  render: PropTypes.func.isRequired,
};

export default App;
