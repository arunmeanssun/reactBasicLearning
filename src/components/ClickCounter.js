import React, { Component } from 'react';
import withCounter from './WithCounter';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, incrementCounter, name } = this.props;
    return (
      <React.Fragment>
        <p><button onClick={incrementCounter}>{ name } clicked {count} times</button></p>
        </React.Fragment>
    )
  }
}

export default withCounter(ClickCounter);