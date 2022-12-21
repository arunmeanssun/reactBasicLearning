import React, { Component } from 'react';
import ForwardRef from './ForwardRef';

class ForwardRefParent extends Component {
    constructor(props) {
      super(props);
        
      this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <React.Fragment>
        <h2>Example to learn forward Reference</h2>
        <ForwardRef ref={this.inputRef} />
        <p><button onClick={this.clickHandler}>FocusInput</button></p>
      </React.Fragment>
    )
  }
}

export default ForwardRefParent;