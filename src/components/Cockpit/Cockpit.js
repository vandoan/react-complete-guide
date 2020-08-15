import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClasses = '';

    if(props.showPersons) {
      btnClasses = classes.Red;
    }


    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Good times.</p>

            <button 
            className={btnClasses}
            alt={props.showPersons}
            onClick={props.clicked}>Show names
            </button>
        </div>
    );
}

export default cockpit;