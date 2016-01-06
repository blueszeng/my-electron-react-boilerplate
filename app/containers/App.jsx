'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SampleSection from '../components/SampleSection';
import * as SampleActions from '../actions/samples';
import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    const { samples, actions } = this.props;
    return (
      <div>
        <SampleSection samples={samples} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  samples: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SampleActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
