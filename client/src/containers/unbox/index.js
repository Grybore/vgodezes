import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UnboxWaiting from './waiting';
import ErrorPopup from '../header/error';
import UnboxConfirmation from './confirmation';
import UnboxResult from './result';
import UnboxPoller from './poller';
import { endUnboxing } from '../../actions';

class UnboxStatus extends Component {
  goBack(event) {
    event.preventDefault();
    this.props.dispatch(endUnboxing());
  }

  render() {
    switch (this.props.unbox.state) {
      case 'OFFER_PENDING':
        return (
          <Fragment>
            <UnboxConfirmation />
            <UnboxPoller />
          </Fragment>
        );
      case 'OFFER_FAILED':
      case 'OPENING_FAILED':
        return (
          <ErrorPopup
            message="Dežės atidarymas nepavyko, raktai iš balanso neišminusuoti. Pabandykite dar kartą."
            goBackHandler={this.goBack.bind(this)}
          />
        );
      case 'OPENING_COMPLETED':
      case 'OPENING_PARTIAL_FAILURE':
        return <UnboxResult />;
      default:
        return (
          <Fragment>
            <UnboxWaiting caseId={this.props.unbox.caseId} />
            <UnboxPoller />
          </Fragment>
        );
    }
  }
}

export default connect(state => ({
  unbox: state.unbox,
}))(UnboxStatus);
