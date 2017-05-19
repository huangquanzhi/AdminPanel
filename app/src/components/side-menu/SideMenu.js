import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SideMenuItem from './SideMenuItem';

export default class SideMenu extends PureComponent {
  renderUserBox() {
    return (
      <div className="user-box">
        <div className="user-img">
          <img
            src="assets/images/catinbox.png"
            alt="user-img"
            title="Jackie huang"
            className="img-circle img-thumbnail img-responsive"
          />
          <div className="user-status offline">
            <i className="zmdi zmdi-dot-circle" />
          </div>
        </div>
        <h5><a>Jackie Huang</a> </h5>
        <ul className="list-inline">
          <li>
            <a>
              <i className="zmdi zmdi-settings" />
            </a>
          </li>

          <li>
            <a className="text-custom">
              <i className="zmdi zmdi-power" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          { this.renderUserBox() }
          <ul>
            <SideMenuItem />
          </ul>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

const propTypes = {
};

const defaults = {
};

SideMenu.propTypes = propTypes;
SideMenu.defaultProps = defaults;
