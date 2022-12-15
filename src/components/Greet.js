import React from "react";

const Greet = (props) => {
    return(
        <div>
            <h1>Welcome {props.name}, A.K.A The {props.heroName}</h1>
            { props.children }
        </div>
    )
} 

//de-structured props example in the function
/*
const Greet = ({name, heroName}) => {
    return(
        <div>
            <h1>Welcome {name}, A.K.A The {heroName}</h1>
            
        </div>
    )
} */

export default Greet;