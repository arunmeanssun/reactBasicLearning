import React from 'react';
import Person from './Person';

function NameList() {
    const names = ["Arun", "Avenash", "Murali", "Hari", "Raj Mohan", "Ram"];
    const namesList = names.map(name => <p> { name }</p>);

    const persons = [
        { id: 1, name: "Arun", skill: "UI/UX Developer"},
        { id: 2, name: "Avenash", skill: "Java and shell programmer"},
        { id: 3, name: "Murali", skill: "Manager"},
        { id: 4, name: "Hari", skill: "Java Team Lead"},
        { id: 5, name: "Raj Mohan", skill: "Java Team Lead"},
        { id: 6, name: "Ram", skill: "Ortho Doctor" }
    ];

    const personsList = persons.map(person => (
        <Person key={person.id} details={person} />
    ));
  
    return <div>{ personsList }</div>;;
}

export default NameList;