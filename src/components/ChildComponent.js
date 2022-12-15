import React from 'react';
import PropTypes from 'prop-types';

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("Child") }>Greet Parent</button>
    </div>
  )
}

ChildComponent.propTypes = {

}

export default ChildComponent;

