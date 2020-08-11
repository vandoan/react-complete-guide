import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Abacus', age: 44 },
      { name: 'Ren', age: 4 },
      { name: 'Mara', age: 24 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('hotdog');
    this.setState( {
      persons: [
        { name: newName, age: 45 },
        { name: 'Ren', age: 4 },
        { name: 'Pike', age: 22 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Boo", age: 45 },
        { name: "Ren", age: 4 },
        { name: event.target.value, age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Pip")}>Switch name</button>
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
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Howdy'));
  }
}

export default App;
