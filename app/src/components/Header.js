import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

export default class Header extends PureComponent {
  renderLogo() {
    const { onLogoClick, applicationTitle } = this.props;
    return (
      <div className="topbar-left">
        <span onClick={onLogoClick} className="logo">
          <span>{ applicationTitle }</span>
          <i className="zmdi zmdi-layers" />
        </span>
      </div>
    );
  }

  renderNavLeft() {
    const { pageTitle } = this.props;

    return (
      <ul className="nav navbar-nav navbar-left">
        <li>
          <button className="button-menu-mobile open-left">
            <i className="zmdi zmdi-menu" />
          </button>
        </li>
        <li>
          <h4 className="page-title">{pageTitle}</h4>
        </li>
      </ul>
    );
  }

  renderNavRight() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <div className="notification-box">
            <ul className="list-inline m-b-0">
              <li>
                <a className="right-bar-toggle">
                  <i className="zmdi zmdi-notifications-none" />
                </a>
                <div className="noti-dot">
                  <span className="dot" />
                  <span className="pulse" />
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="hidden-xs">
          <form role="search" className="app-search">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
            />
            <a href=""><i className="fa fa-search" /></a>
          </form>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="topbar">
        { this.renderLogo() }

        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            { this.renderNavLeft() }
            { this.renderNavRight() }
          </div>
        </div>
      </div>
    );
  }
}

const propTypes = {
  // variables
  applicationTitle: PropTypes.string,
  pageTitle: PropTypes.string,
  // functions
  onLogoClick: PropTypes.func.isRequired
};

const defaultProps = {
  applicationTitle: '',
  pageTitle: ''
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
