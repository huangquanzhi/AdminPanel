import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideMenu from '../components/side-menu/SideMenu';

class LeftMenuContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left side-menu">
          <div className="sidebar-inner slimscrollleft">

              <!-- User -->
              <div className="user-box">
                  <div className="user-img">
                      <img src="assets/images/users/avatar-1.jpg" alt="user-img" title="Mat Helme" className="img-circle img-thumbnail img-responsive">
                      <div className="user-status offline"><i className="zmdi zmdi-dot-circle"></i></div>
                  </div>
                  <h5><a href="#">Mat Helme</a> </h5>
                  <ul className="list-inline">
                      <li>
                          <a href="#" >
                              <i className="zmdi zmdi-settings"></i>
                          </a>
                      </li>

                      <li>
                          <a href="#" className="text-custom">
                              <i className="zmdi zmdi-power"></i>
                          </a>
                      </li>
                  </ul>
              </div>
              <!-- End User -->

              <!--- Sidemenu -->
              <SideMenu />
              <!-- Sidebar -->
              <div className="clearfix"></div>

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
