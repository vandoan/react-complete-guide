import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( ( person, index ) => {
    return <Person
        age={person.age} 
        changed={(event) => props.changed(event, person.id)}    // Use this arrow function format to pass event through
        click={() => props.clicked(index)}
        key={person.id}
        name={person.name}
        />
});

export default persons;

