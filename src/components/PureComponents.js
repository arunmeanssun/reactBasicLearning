import React, { PureComponent } from 'react';

class PureComponents extends PureComponent {
  render() {
    console.log("Rendering Pure Component");
    return (
        <React.Fragment>
            <h2>Pure Components { this.props.name }</h2>
        </React.Fragment>
    )
  }
}

export default PureComponents;