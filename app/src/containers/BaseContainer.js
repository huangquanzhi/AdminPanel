import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import DashboardContainer from './views/DashboardContainer';

import {
  VIEW_LIST_HOME
} from '../constants/application';

// include containers
import LeftMenuContainer from './LeftMenuContainer';

// include components
import Header from '../components/Header';
import Footer from '../components/Footer';

// constants

class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.renderView = this.renderView.bind(this);
  }

  renderView() {
    const { application: { currentView } } = this.props;
    switch (currentView) {
      case VIEW_LIST_HOME:
        return <DashboardContainer />
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="fixed-left">
        <div id="wrapper">
          <Header applicationTitle="Admin Panel" pageTitle="Dashboard"/>
          <ReactCSSTransitionGroup
            transitionName="side-menu__transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <LeftMenuContainer key="left-menu-key" />
          </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            transitionName="home-page__transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <main>
              { this.renderView() }
            </main>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

const propTypes = {
  application: PropTypes.object.isRequired
};

BaseContainer.propTypes = propTypes;


function mapStateToProps(state) {
  return {
    application: state.application
  };
}


export default connect(mapStateToProps, null)(BaseContainer);
