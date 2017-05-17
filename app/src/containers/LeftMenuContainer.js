import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideMenu from '../components/side-menu/SideMenu';

class LeftMenuContainer extends PureComponent {
  render() {
    return (
      <div className="left side-menu">
        <div className="sidebar-inner slimscrollleft">

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

          <SideMenu />

          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

const propTypes = {

};

LeftMenuContainer.propTypes = propTypes;


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuContainer);
