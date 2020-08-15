import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

// const ButtonStyle = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   border: 1px solid blue;
//   color: white;
//   cursor: pointer;
//   font: inherit;
//   padding: 8px;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
  
//`

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
    // const persons = this.state.persons.slice();   // Able to edit this because const is pointer
    const persons = [...this.state.persons];      // Works as well as above, more modern approach
    persons.splice(personIndex, 1);               // 2nd index removes the number of items
    this.setState({persons: persons});            // Use slice to make copy, best practice
    // Avoid updating original state directly, create a copy first.
  }

  nameChangedHandler = ( event, id ) => {

    // If the id passed matches with one of the state's person, set person index
    // .findIndex returns the index of the first match
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    /*
      Another method to create a copy
      The above method is the more modern approach
      const person = Object.assignt({}, this.state.persons[personIndex])
    */


    // Update person
    person.name = event.target.value;

    const persons = [...this.state.persons];
    // Copy of state, use the spread operator to distribute original properties

    /* Avoid updating original state directly, create a copy first.
       Good practice to not mutate state directly, so create a copy.
       JS Object are pointers and direct mutation will not update original.
    */

    persons[personIndex] = person;
    this.setState({persons: persons});            
     
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // switchNameHandler = (newName) => {
  //   // console.log('hotdog');
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 45 },
  //       { name: 'Ren', age: 4 },
  //       { name: 'Pike', age: 22 }
  //     ]
  //   })
  // }



  render() {

    let persons = null;
    let btnClasses = [classes.Button];


    if( this.state.showPersons ) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)}    // Use this arrow function format to pass event through
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                />

          }) }

          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            click={this.switchNameHandler.bind(this,"Sue")}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler} />
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} 
            changed={this.nameChangedHandler}
            >Hobbies: biking.</Person> */}

        </div> 
      );

      // buttonStyle.backgroundColor = 'red';
      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };

      btnClasses.push(classes.Red);
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    
    return (
        <div className={classes.App}>

          <p className={assignedClasses.join(' ')}>Good times.</p>

          <button 
            className={btnClasses.join(' ')}
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Show names
          </button>

          {persons}

          {/* 
            // Terniary expresion
            { this.state.showPersons ? 
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                click={this.switchNameHandler.bind(this,"Sue")}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler} />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} 
                changed={this.nameChangedHandler}
                >Hobbies: biking.</Person>
            </div> : null
          } */}

        </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Howdy'));
  }
}

export default App;
// export default Radium(App);
// Radium - higher order component
