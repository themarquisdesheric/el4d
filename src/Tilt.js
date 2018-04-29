import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  componentDidMount() {
    VanillaTilt.init(this.rootNode, {
      reverse: true,
      transition: true,
      perspective: 500,
      max: 35,
      speed: 400,
      glare: false,
      reset: true,
    });
  }

  render() {
    return (
      <div
        ref={node => this.rootNode = node}
        className="tilt-root"
      >
        <div className="tilt-child">
          <div {...this.props} />
        </div>
      </div>
    );
  }
}

export default Tilt;