<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCaseItems } from '../../actions';
import CaseItem from './item';

class UnboxWaiting extends Component {
  componentDidMount() {
    this.props.dispatch(getCaseItems(this.getCase()));
  }

  getCase() {
    return this.props.cases.find(kase => {
      return kase.id == this.props.caseId;
    });
  }

  render() {
    let items = [];
    if (this.getCase() && this.getCase().items) {
      items = this.getCase().items;
    }

    // Initialize the slider items list and indicators
    const sliderItems = [];
    const sliderIndicators = [];

    // For each item add it to the list and add an indicator
    items.forEach((item, index) => {
      sliderItems.push(
        <div
          className={index === 0 ? 'carousel-item active' : 'carousel-item'}
          key={index}
        >
          <img src={item.image['600px']} />
          <div className="data">
            <p className="txt-blue">{item.name}</p>
            <p className="txt-white">{item.category}</p>
          </div>
        </div>
      );

      sliderIndicators.push(
        <li
          data-target="#carousel"
          data-slide-to={index}
          key={index}
          className={index === 0 ? 'active' : null}
        />
      );
    });

    return (
      <section className="opening">
        <div className="container">
          <div className="waiting-container">
            <p className="waiting">
              Kuriame jūsų daiktus tarp blockchain. Duokite mums dvi
              minutes šiam veiksmui atlikti.
            </p>
            <h5 className="waiting">ATSIRAKINKITE SAVO DAIKTUS</h5>
            <img src="/img/spinner.svg" className="loading" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="txt-white">Daiktai, kurie galėtų būti šioje dežėje</h4>
            </div>
          </div>
          <div className="row">
            {items.map((item, i) => (
              <CaseItem
                key={i}
                name={item.name}
                category={item.category}
                image={item.image}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  cases: state.cases,
}))(UnboxWaiting);
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCaseItems } from '../../actions';
import CaseItem from './item';

class UnboxWaiting extends Component {
  componentDidMount() {
    this.props.dispatch(getCaseItems(this.getCase()));
  }

  getCase() {
    return this.props.cases.find(kase => {
      return kase.id == this.props.caseId;
    });
  }

  render() {
    let items = [];
    if (this.getCase() && this.getCase().items) {
      items = this.getCase().items;
    }

    // Initialize the slider items list and indicators
    const sliderItems = [];
    const sliderIndicators = [];

    // For each item add it to the list and add an indicator
    items.forEach((item, index) => {
      sliderItems.push(
        <div
          className={index === 0 ? 'carousel-item active' : 'carousel-item'}
          key={index}
        >
          <img src={item.image['600px']} />
          <div className="data">
            <p className="txt-blue">{item.name}</p>
            <p className="txt-white">{item.category}</p>
          </div>
        </div>
      );

      sliderIndicators.push(
        <li
          data-target="#carousel"
          data-slide-to={index}
          key={index}
          className={index === 0 ? 'active' : null}
        />
      );
    });

    return (
      <section className="opening">
        <div className="container">
          <div className="waiting-container">
            <p className="waiting">
              Kuriame jūsų daiktus tarp blockchain. Duokite mums dvi
              minutes šiam veiksmui atlikti.
            </p>
            <h5 className="waiting">ATSIRAKINKITE SAVO DAIKTUS</h5>
            <img src="/img/spinner.svg" className="loading" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="txt-white">Daiktai, kurie galėtų būti šioje dežėje</h4>
            </div>
          </div>
          <div className="row">
            {items.map((item, i) => (
              <CaseItem
                key={i}
                name={item.name}
                category={item.category}
                image={item.image}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  cases: state.cases,
}))(UnboxWaiting);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
