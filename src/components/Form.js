import React, { Component } from 'react';
import "./appStyles.css";

class Form extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'      
      }
    }
    //username change event
    usernameChangeHandler = (event) => {
        this.setState({
            username: event.target.value,            
        });
    };

    commentsChangeHandler = (event) => {
        this.setState({
            comments: event.target.value,            
        });
    };

    topicChangeHandler = (event) => {
        this.setState({
            topic: event.target.value,            
        });
    };

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    };

  render() {
    return (
        <form onSubmit={this.submitHandler}>
            <div className='form-field mb-3'>
                <label className='mr-3'>Username</label>
                <input type="text" value={this.state.username} onChange={this.usernameChangeHandler}/>
            </div>

            <div className='mb-3 d-flex a-center j-center'>
                <label className='mr-3'>Comments</label>
                <textarea value={this.state.comments} onChange={this.commentsChangeHandler}> </textarea>
            </div>

            <div className='mb-3'>
                <label className='mr-3'>Topic</label>
                <select value={ this.state.topic } onChange={this.topicChangeHandler}>                    
                    <option value="angular">Angular</option>   
                    <option value="react">React</option>
                    <option value="vue">Vue</option>                      
                </select>  
            </div>

            <div className='mb-3'>
                <button type="submit">Submit Form</button>
            </div>
        </form>
    )
  }
}

export default Form;