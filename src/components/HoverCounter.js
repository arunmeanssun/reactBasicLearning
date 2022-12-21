import React, { Component } from 'react';
import withCounter from './WithCounter';

class HoverCounter extends Component { 
  constructor(props) {
    super(props);  
  }

  render() {
    const { count, incrementCounter, name } = this.props;
    return (
      <React.Fragment>
        <h2 onMouseOver={incrementCounter}>{name } hovered {count} times</h2>
        </React.Fragment>
    )
  }
}

export default withCounter(HoverCounter);