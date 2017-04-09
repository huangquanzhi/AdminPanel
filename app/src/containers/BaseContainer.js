import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BaseContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1> Hello </h1>
      </main>
    );
  }
}

const propTypes = {

};

BaseContainer.propTypes = propTypes;


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);
