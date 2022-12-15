import React from 'react';

function Person({details}) {
  return (
    <p> I am { details.name }. I am a skilled { details.skill } </p>
  )
}

export default Person;