import React, { Component } from 'react';

class ClassClick extends Component {
    buttonClick() {
        console.log("clicked the button");
    }
  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick;
