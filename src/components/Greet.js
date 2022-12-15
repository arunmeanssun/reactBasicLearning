import { react } from "react";

const Greet = (props) => {
    console.log(props, "props");
    return (
    <div>
        <h1>Welcome { props.name }, The { props.heroName } </h1>

        { props.children }
        
    </div>
    );
};

export default Greet;