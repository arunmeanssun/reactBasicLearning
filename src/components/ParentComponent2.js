import React, { Component } from 'react';
import RegularComponent from './RegularComponent';
import PureComponents from './PureComponents';

class ParentComponent2 extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         name: "Arun"
      }
    }

    componentDidMount(){         
        setInterval(() => {
            this.setState({
                name: "Arun"
            });
        }, 2000);
    }

  render() {
    console.log("Rendering Parent Component");
    return (
        <React.Fragment>
            <h2>Parent Component 2</h2>
            <RegularComponent name={this.state.name} />
            <PureComponents name={this.state.name} />
        </React.Fragment>
    )
  }
}

export default ParentComponent2;