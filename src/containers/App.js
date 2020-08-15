import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = {
    persons: [
      { name: 'Abacus', age: 44, id: 'aa1' },
      { name: 'Ren', age: 4, id: 'aa11' },
      { name: 'Mara', age: 24, id: 'aa13' },
    ],
    showPersons: false
  }

  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];      // Works as well as above, more modern approach
    persons.splice(personIndex, 1);               // 2nd index removes the number of items
    this.setState({persons: persons});            // Use slice to make copy, best practice
  }

  nameChangedHandler = ( event, id ) => {

    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({persons: persons});            
     
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if( this.state.showPersons ) {
      persons = <Persons 
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
            persons={this.state.persons}
          />;
    }
    
    return (
        <div className={classes.App}>
          
          <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          />

          {persons}

        </div>
    );

  }
}

export default App;
// export default Radium(App);
// Radium - higher order component
