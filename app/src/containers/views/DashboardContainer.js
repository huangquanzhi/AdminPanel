import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from '../../components/Footer';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="content-page">
          <div class="content">
              <div class="container">
                  <div class="row">
                   test
                  </div>
              </div>
          </div>

          <Footer />
      </div>
    );
  }
}

const propTypes = {
  application: PropTypes.object.isRequired
};

DashboardContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    application: state.application
  };
}


export default connect(mapStateToProps, null)(DashboardContainer);
