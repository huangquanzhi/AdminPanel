import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// constants
import {
  VIEW_LIST_HOME
} from '../constants/application';

// actions
import * as appActions from '../actions/application';

class GroupPageContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView() {
    const { appActions: { setView } } = this.props;
    setView(VIEW_LIST_HOME);
  }

  render() {
    return (
      <div className="group-page">
        <button value="Change" onClick={this.handleChangeView} />
      </div>
    );
  }
}

const propTypes = {
  appActions: PropTypes.object.required,
};

GroupPageContainer.propTypes = propTypes;


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

export default connect(mapStateToProps, mapDispatchToProps)(GroupPageContainer);
