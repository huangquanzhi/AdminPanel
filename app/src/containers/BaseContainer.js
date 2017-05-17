import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// include containers
import LeftMenuContainer from './LeftMenuContainer';
import HomePageContainer from './HomePageContainer';
import GroupPageContainer from './GroupPageContainer';

// include components
import Header from '../components/Header';
import Footer from '../components/Footer';

// constants
import {
  VIEW_LIST_HOME,
  VIEW_LIST_GROUP
} from '../constants/application';

class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.renderView = this.renderView.bind(this);
  }

  renderView() {
    const { application: { view } } = this.props;
    switch (view) {
      case VIEW_LIST_HOME:
        return <HomePageContainer key="home-page-key" />;
      case VIEW_LIST_GROUP:
        return <GroupPageContainer key="group-page-key" />;
      default:
        return null;
    }
  }

  render() {
    return (
      <main>
        <Header />

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
          { this.renderView() }
        </ReactCSSTransitionGroup>
        <Footer />
      </main>
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
