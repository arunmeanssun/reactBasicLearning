import React from 'react';

const withCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            
            this.state = {
                count: 0,
                name: "Arun"
            }
        }
      
        incrementCount = () => {
            this.setState((prevState) => {
                return { count: prevState.count + Number(this.props.incrementCount) }
            });
        }

        render(){
            return <WrappedComponent name={this.state.name} incrementCounter={this.incrementCount} count={this.state.count} {...this.props} />;
        }
    }

    return WithCounter;
   
}

export default withCounter;