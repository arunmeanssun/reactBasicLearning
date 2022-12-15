import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }
    
    incrementCounter(){   
        /*      
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("Count after increment action - " + this.state.count );
        }); */

        // another method for setting state by passing function

        this.setState(prevState => ({
            count: prevState.count + 1
        }), 
        
        () => {
            console.log(this.state.count);
        });

        
    }

    decrementCounter(){        
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log("Count after decrement action - " + this.state.count );
        });
    }

  render() {
    return (
      <div>
        <p>Count - { this.state.count }  </p>
        <p><button onClick={ () => this.incrementCounter()}> + </button> &nbsp; &nbsp;
        <button onClick={ () => this.decrementCounter()}> - </button> </p>
      </div>
    )
  }
}

export default Counter;
