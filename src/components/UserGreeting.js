import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    return this.state.isLoggedIn ? (
    <p>Welcome Arun!</p> 
    ): (
        <p>Welcome Guest!</p>
    );

    /* another method
        return this.state.isLoggedIn && <p>Welcome Arun!</p>;

    /* this is element variable method to conditionaly display the section
      let message;

      if(this.state.isLoggedIn){
          message = <p>Welcome Arun!</p>;
      } else {
            message = <p>Welcome Guest!</p>;
      }

      return message;
      */


      // using if else template logic 
      /*
      if(this.state.isLoggedIn){
        return (
            <div>
              <p>Welcome Arun!</p>              
            </div>
          )
      } else {
        return (
            <div>              
              <p>Welcome Guest!</p>
            </div>
          )
      } */
    
  }
}

export default UserGreeting;
