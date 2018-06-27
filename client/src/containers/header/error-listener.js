<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import ErrorPopup from './error';

class ErrorListener extends Component {
  goBack(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    if (this.props.error) {
      return (
        <ErrorPopup
          message={this.props.message}
          goBackHandler={this.goBack.bind(this)}
        />
      );
    }
    return null;
  }
}

export default connect(state => ({
  error: state.error.error,
  message: state.error.message,
}))(ErrorListener);
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';
import ErrorPopup from './error';

class ErrorListener extends Component {
  goBack(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    if (this.props.error) {
      return (
        <ErrorPopup
          message={this.props.message}
          goBackHandler={this.goBack.bind(this)}
        />
      );
    }
    return null;
  }
}

export default connect(state => ({
  error: state.error.error,
  message: state.error.message,
}))(ErrorListener);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
