import React from 'react'

function Columns() {
    const items = [
        { name: "Arun", companyName: "Saksoft Limited", age: 37 },
        { name: "Murali", companyName: "Cognizant", age: 37},
        { name: "Avenash", companyName: "Capegemini", age: 37}
    ];

    return (
        <React.Fragment>
            {
                items.map((record) => {
                    return(
                        <tr>
                        <td>{record.name}</td>
                        <td>{record.companyName}</td>
                        <td>{record.age}</td>
                        </tr>
                    );
                })
            }            
        </React.Fragment>
    );
}

export default Columns