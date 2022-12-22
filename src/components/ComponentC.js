import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentC extends Component {
  render() {
    return (
        <UserConsumer>
            {(userFullName) => {
                    return <p>Hello {userFullName}</p>;
                }
            }
        </UserConsumer>
    );    
  }
}

export default ComponentC;