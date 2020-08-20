import React, {useEffect, useContext, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const assignedClasses = [];
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
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
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default cockpit;