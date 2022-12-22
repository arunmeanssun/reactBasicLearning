/* lesson to learn render props */

import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <h2>{this.props.render(true) }</h2>
    )
  }
}

export default User;