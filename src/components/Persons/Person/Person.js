import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import PropTypes from 'prop-types';
import withClass from  '../../../hoc/withClass';
// import Radium from 'radium';
import styled from 'styled-components';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount() {
		this.inputElementRef.current.focus();
	}

	render() {
		return (
			<Aux>
				{this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
				<p onClick={this.props.click}>I'm {this.props.name}, and I am {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input 
				type="text" 
				onChange={this.props.changed} 
				ref={this.inputElementRef}
				value={this.props.name}
				/>
			</Aux>
		);
	}
};

Person.propTypes = {
	age: PropTypes.number,
	click: PropTypes.func,
	name: PropTypes.string,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person); 