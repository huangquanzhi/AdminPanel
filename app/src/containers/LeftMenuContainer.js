import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SideMenu from '../components/side-menu/SideMenu';

class LeftMenuContainer extends PureComponent {
  render() {
    return (
      <div className="left side-menu">
        <SideMenu />
      </div>
    );
  }
}

const propTypes = {
  // variables
};

const defaultProps = {
}

LeftMenuContainer.propTypes = propTypes;
LeftMenuContainer.defaultProps = defaultProps;

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuContainer);
