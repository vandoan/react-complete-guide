import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    const toggleBtnRef = useRef(null);
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
            <p className={assignedClasses.join(' ')}>{props.title}</p>

            <button 
            className={btnClasses}
            alt={props.showPersons}
            onClick={props.clicked}
            ref={toggleBtnRef}>
            Show names
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
}

export default cockpit;