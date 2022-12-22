import React, { Component } from 'react';
import ComponentC from './ComponentC';
import UserContext from './UserContext';

class ComponentB extends Component {
  render() {
    return (
        <React.Fragment>
            <h3>Component B</h3>
            <p>{ this.context }</p>
            <ComponentC />
        </React.Fragment>

    )
  }
}

ComponentB.contextType = UserContext;

export default ComponentB;