/* Lesson to learn render props */

import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    
  render() {
    const {count, incrementCount} = this.props;

    return (
      <React.Fragment>
        <h2>Example for Render Props</h2>
        <p><button onClick={incrementCount}>Clicked { count } times</button></p>
      </React.Fragment>
    )
  }
}

export default ClickCounterTwo;