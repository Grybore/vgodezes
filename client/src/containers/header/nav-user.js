<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { logout } from '../../actions';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavUser extends Component {
  exitClicked(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  componentDidMount() {
    $('.nav-user').hover(
      () => {
        $('.nav-user .dropdown-menu').addClass('show');
      },
      () => {
        $('.nav-user .dropdown-menu').removeClass('show');
      }
    );
  }

  componentWillUnmount() {
    $('.nav-user').off('mouseenter mouseleave');
  }

  render() {
    let isHomeLink;
    if (!this.props.isHome) {
      isHomeLink = (
        <Link to="/info" className="dropdown-item">
          Grįžti į pagrindinį puslapį
        </Link>
      );
    }
    return (
      <span className="nav-user">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="dropdown-toggle">
            <img
              className="nav-user-avatar"
              src={this.props.auth.avatar}
              alt=""
            />
            <span className="nav-username">{this.props.auth.username}</span>
          </DropdownToggle>
          <DropdownMenu right>
            <a
              href=""
              className="dropdown-item"
              onClick={this.exitClicked.bind(this)}
            >
              Atsijungti
            </a>
            {isHomeLink}
            <a
              href="//trade.opskins.com/inventory"
              target="_blank"
              className="dropdown-item"
            >
              Mano VGO inventorius
            </a>
          </DropdownMenu>
        </UncontrolledDropdown>
      </span>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}))(NavUser);
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { logout } from '../../actions';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavUser extends Component {
  exitClicked(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  componentDidMount() {
    $('.nav-user').hover(
      () => {
        $('.nav-user .dropdown-menu').addClass('show');
      },
      () => {
        $('.nav-user .dropdown-menu').removeClass('show');
      }
    );
  }

  componentWillUnmount() {
    $('.nav-user').off('mouseenter mouseleave');
  }

  render() {
    let isHomeLink;
    if (!this.props.isHome) {
      isHomeLink = (
        <Link to="/info" className="dropdown-item">
          Grįžti į pagrindinį puslapį
        </Link>
      );
    }
    return (
      <span className="nav-user">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav className="dropdown-toggle">
            <img
              className="nav-user-avatar"
              src={this.props.auth.avatar}
              alt=""
            />
            <span className="nav-username">{this.props.auth.username}</span>
          </DropdownToggle>
          <DropdownMenu right>
            <a
              href=""
              className="dropdown-item"
              onClick={this.exitClicked.bind(this)}
            >
              Atsijungti
            </a>
            {isHomeLink}
            <a
              href="//trade.opskins.com/inventory"
              target="_blank"
              className="dropdown-item"
            >
              Mano VGO inventorius
            </a>
          </DropdownMenu>
        </UncontrolledDropdown>
      </span>
    );
  }
}

export default connect(state => ({
  auth: state.auth,
}))(NavUser);
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
