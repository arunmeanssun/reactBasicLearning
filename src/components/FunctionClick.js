import React from 'react';
import PropTypes from 'prop-types';

function FunctionClick(props) {
    function buttonClick(){
        console.log("button clicked");
    }
  return (
    <div>
      <button onClick={buttonClick}>Click</button>
    </div>
  )
}

FunctionClick.propTypes = {

}

export default FunctionClick;

