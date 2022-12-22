import React, { Component } from 'react';
import ComponentB from './ComponentB';

class ComponentA extends Component {
  render() {
    return (
        <React.Fragment>
            <h2>Component A</h2>
            <ComponentB />        
        </React.Fragment>
    )
  }
}

export default ComponentA;