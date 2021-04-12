import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from '../firebase';
import { Button } from '@material-ui/core';

const SignUp = ({ history }) => {
	const handleSignUp = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push('/login');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<div>
			<h1>Sign up</h1>
			<form onSubmit={handleSignUp}>
				<label>
					Email:
					<input name='email' type='email' placeholder='Email' />
				</label>
				<br />
				<label>
					Password: 
					<input name='password' type='password' placeholder='Password' />
				</label>
				<br />
				<Button variant='contained' color='primary' type='submit'>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default withRouter(SignUp);
