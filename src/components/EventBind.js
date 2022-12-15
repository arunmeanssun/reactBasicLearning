import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "sample message"
        };
        
        // binding in constructor 
        // this.eventHandler = this.eventHandler.bind(this);
    }
    /*
    eventHandler() {
        this.setState({
            message: "Goodbye!"
        });
    } */

    eventHandler = () => {
        this.setState({
            message: "Goodbye!"
        });
    } 



  render() {
    return (
      <div>
          <p>{ this.state.message }</p>
        { /* <button onClick={ this.eventHandler.bind(this) }>Click to Bind</button> */ }
        
        { /* another method of passing arrow function */ }
        { /* <button onClick={() => this.eventHandler() }>Click to Bind</button> */ }

        { /* another 3rd method of passing arrow function, suggested by react */ }
        <button onClick={this.eventHandler}>Click to Bind</button>
      </div>
    )
  }
}

export default EventBind
