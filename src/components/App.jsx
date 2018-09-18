import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      scrollTop: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
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

  toggleSidebar() {
    const { isSidebarOpen } = this.state;
    this.setState({
      isSidebarOpen: !isSidebarOpen,
    });
  }

  render() {
    const { render } = this.props;
    return (
      <div>
        {render({ toggleSidebar: this.toggleSidebar, ...this.state })}
      </div>
    );
  }
}

App.propTypes = {
  render: PropTypes.func.isRequired,
};

export default App;
