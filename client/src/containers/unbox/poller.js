<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnboxStatus } from '../../actions';

const POLL_INTERVAL_MS = 10000;

class UnboxPoller extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.pollUnboxStatus();
    }, POLL_INTERVAL_MS);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pollUnboxStatus() {
    this.props.dispatch(getUnboxStatus(this.props.unbox.tradeId));
  }

  render() {
    return null;
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(UnboxPoller);
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUnboxStatus } from '../../actions';

const POLL_INTERVAL_MS = 10000;

class UnboxPoller extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.pollUnboxStatus();
    }, POLL_INTERVAL_MS);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  pollUnboxStatus() {
    this.props.dispatch(getUnboxStatus(this.props.unbox.tradeId));
  }

  render() {
    return null;
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(UnboxPoller);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
