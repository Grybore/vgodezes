<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CaseList from '../cases';
import UnboxStatus from '../unbox';
import FixedHeader from '../header/fixed';

function TopPanel(props) {
  if (props.unbox.state !== 'NOT_STARTED') {
    return (
      <Fragment>
        <FixedHeader />
        <UnboxStatus />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <FixedHeader />
        <CaseList />
      </Fragment>
    );
  }
}

class Home extends Component {
  render() {
    return TopPanel(this.props);
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(Home);
=======
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CaseList from '../cases';
import UnboxStatus from '../unbox';
import FixedHeader from '../header/fixed';

function TopPanel(props) {
  if (props.unbox.state !== 'NOT_STARTED') {
    return (
      <Fragment>
        <FixedHeader />
        <UnboxStatus />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <FixedHeader />
        <CaseList />
      </Fragment>
    );
  }
}

class Home extends Component {
  render() {
    return TopPanel(this.props);
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(Home);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
