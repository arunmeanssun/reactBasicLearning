import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef();

        // callback ref method
        this.callbackRef = null;
        this.setCallbackRef = element => {
            this.callbackRef = element;
        }
    }

    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus();
        if(this.callbackRef){
            this.callbackRef.focus();
        }
    }

    searchTxtHandler = () => {
        console.log(this.inputRef.current.value);
        console.log(this.callbackRef.current.value);
    }
    
  render() {
    return (
        <React.Fragment>
            <p>Refs Demo &nbsp; <input type="text" placeholder='Search Web' ref={this.inputRef} /> </p>
            <p>Refs  callback ref Demo &nbsp; <input type="text" placeholder='Search' ref={this.setCallbackRef} /> </p>
            <p><button onClick={this.searchTxtHandler}>Get Search Value</button></p>
      </React.Fragment>
    )
  }
}

export default RefsDemo;
