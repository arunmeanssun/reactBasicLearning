import React  from "react";


const HelloJsx = () => {
    // React Version of coding style with JSX
    /*
    return(
        <div id="hello" className="my-3">
            <h1>Hello Arun</h1>
        </div>
    ); */

    // React Version of coding style without JSX

    // return React.createElement("div", { id: "hello", className: "my-3"}, <h2>Hello Arun</h2>);

    return React.createElement("div", { id: "hello", className: "my-3"}, React.createElement("h2", {className: "red"}, "Hello Arun"));
};

export default HelloJsx;
