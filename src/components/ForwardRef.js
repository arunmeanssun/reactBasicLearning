import React from 'react';
/*
function ForwardRef() {
  return (
    <React.Fragment>
        <p><input type="text" /></p>
    </React.Fragment>
  )
} */

const ForwardRef = React.forwardRef((props, refs) =>{
    return (
        <React.Fragment>
            <p><input type="text" ref={refs} /></p>
        </React.Fragment>
      )
});

export default ForwardRef;