import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Arun'
      }

      console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount")
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate");
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");
    }
    
    render() {
        console.log('LifecycleB Render');
        return (
        <div>
            LifecycleB Component
        </div>
        )
    }
}

export default LifecycleB;
