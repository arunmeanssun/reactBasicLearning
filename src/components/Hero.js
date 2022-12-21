/* lesson to learn error boundary */

import React from 'react';

function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new Error("Not a hero");
    }
  return (<React.Fragment>
        <p>Hero name is <strong>{heroName}</strong>.</p>
    </React.Fragment>
  )
}

export default Hero;