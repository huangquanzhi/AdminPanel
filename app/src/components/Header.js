import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <div className="topbar">
        <div className="topbar-left">
          <a href="index.html" className="logo">
            <span>Admin Panel</span>
            <i className="zmdi zmdi-layers" />
          </a>
        </div>

        <div className="navbar navbar-default" role="navigation">
          <div className="container">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <button className="button-menu-mobile open-left">
                  <i className="zmdi zmdi-menu" />
                </button>
              </li>
              <li>
                <h4 className="page-title">Dashboard</h4>
              </li>
            </ul>

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
          </div>
        </div>
      </div>
    );
  }
}
