import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// constants
import {
  VIEW_LIST_GROUP
} from '../constants/application';

// actions
import * as appActions from '../actions/application';

// components
import WidgetGroup from '../components/widget/WidgetGroup';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView() {
    const { appActions: { setView } } = this.props;
    setView(VIEW_LIST_GROUP);
  }

  render() {
    return (
      <div className="home-page">
        <WidgetGroup
          items={
            [
              {
                size: {
                  width: 4,
                  height: 2
                },
                element: (<div>
                <h1> Jackie Huang </h1>
                <h2> Programmer </h2>
                <h3> Just developing </h3>
                <h4> YOLO </h4>
                </div>)
              },
              {
                size: {
                  width: 4,
                  height: 2
                },
                element: <span> Test 2</span>
              },
              {
                element: <span> Test 3</span>
              },
              {
                element: <span> Test </span>
              },
              {
                element: <span> Test </span>
              }
            ]
          }
        />
        <button value="Change" onClick={this.handleChangeView} />
      </div>
    );
  }
}

const propTypes = {
  appActions: PropTypes.object
};

HomePageContainer.propTypes = propTypes;


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
