import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAvailableKeys } from '../../actions';
import $ from 'jquery';

class RemainingKeys extends Component {
  componentDidMount() {
    this.props.dispatch(getAvailableKeys());
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  render() {
    const tooltipText =
      'Kokiais būdais aš galiu gauti vKeys?<br/><br/>' +
      'Yra du būdai kaip gauti vKeys, kurie yra naudojami atidarinėti vCases:<br/><br/>' +
      '<ul>' +
      '<li>Nusipirkti vKeys iš parduotuvės kuri užsiima VGO daiktais</li>' +
      '<li>Gauti vKeys atliekant mainus su kitu VGO naudotoju</li>' +
      '</ul>';

    return (
      <Fragment>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="number">
            {this.props.keys.loaded ? this.props.keys.available : ''}
          </div>
          <div className="title">
            <h1>VKeys</h1>
            <small>Remaining</small>
          </div>
        </div>
        <div className="col-xl-4 col-lg-3 col-md-3 col-sm-6 col-6 buy-more">
          <a
            className="btn"
            href="//opskins.com"
            target="_blank"
            data-toggle="tooltip"
            data-html="true"
            title={tooltipText}
          >
            Nusipirkti daugiau V-KEYS
          </a>
        </div>
      </Fragment>
    );
  }
}

export default connect(state => ({
  keys: state.keys,
}))(RemainingKeys);
