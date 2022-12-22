import React, { Component } from 'react';

class CounterTwo extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
           count: 0
        }
    }
  
    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        })
    }
  
  render() {
    const { count } = this.state;
    return (
      <h2>{this.props.children(count, this.incrementCount)}</h2>
    )
  }
}

export default CounterTwo;