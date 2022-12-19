import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Arun'
      }

      console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate");
    }
    
    render() {
        console.log('LifecycleA Render');
        return (
        <div>
            <p>LifecycleA Component</p>
            <LifecycleB />
        </div>
        )
    }
}

export default LifecycleA;
