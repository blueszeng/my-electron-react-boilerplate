'use strict';

import React, {Component, PropTypes} from 'react';

class SampleSection extends Component {

  handleSayHello(e) {
    const message = e.target.value.trim();
    this.props.actions.sayHello(message);
  }

  render() {
    return (
      <div>
        <h1>{this.props.samples.message}</h1>
        <input
          type="text"
          autoFocus="true"
          onBlur={this.handleSayHello.bind(this)} />
      </div>
    );
  }
}

SampleSection.propTypes = {
  samples: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default SampleSection
