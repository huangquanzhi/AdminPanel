import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SideMenuItem from './SideMenuItem';

export default class SideMenu extends PureComponent {

  render() {
    return (
      <div id="sidebar-menu">
        <ul>
          <SideMenuItem />
        </ul>
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
