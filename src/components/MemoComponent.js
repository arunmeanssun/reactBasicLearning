import React from 'react';

function MemoComponent({name}) {
    console.log("rendering Memo Component");
  return (
    <React.Fragment>
      <h2>Memo Component - {name}</h2>
    </React.Fragment>
  )
}

export default React.memo(MemoComponent);
