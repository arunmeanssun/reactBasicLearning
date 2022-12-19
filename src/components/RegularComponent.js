import React, { Component } from 'react';

class RegularComponent extends Component {    
  render() {
    console.log("Rendering Regular Component");
    return (
      <React.Fragment>
        <h2>Regular Component { this.props.name }</h2>
      </React.Fragment>
    )
  }
}

export default RegularComponent;