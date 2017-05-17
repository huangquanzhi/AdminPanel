import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SideMenuItem from './SideMenuItem';

export default class SideMenu extends PureComponent {

  render() {
    return (
      <div id="sidebar-menu">
          <ul>
            <SideMenuItem />
          </ul>
          <div className="clearfix"></div>
      </div>
    );
  }
}

const propTypes = {
  children: PropTypes.element,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }),
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
};

const defaults = {
  size: {
    width: 2,
    height: 2,
  }
}

SideMenu.propTypes = propTypes;
SideMenu.defaultProps = defaults;
