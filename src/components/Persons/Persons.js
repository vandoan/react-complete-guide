import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map( ( person, index ) => {
            return <Person
                age={person.age} 
                changed={(event) => this.props.changed(event, person.id)}    // Use this arrow function format to pass event through
                click={() => this.props.clicked(index)}
                key={person.id}
                name={person.name}
                isAuth={this.props.isAuthenticated}
                />
        });

    }
}

export default Persons;

