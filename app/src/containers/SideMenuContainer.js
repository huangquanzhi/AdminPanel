import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SideMenuContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-menu">
        Side Menu
      </div>
    );
  }
}

const propTypes = {

};

SideMenuContainer.propTypes = propTypes;


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer);
