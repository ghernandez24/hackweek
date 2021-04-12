import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../firebase';
import { AuthContext } from '../Auth';
import { Button } from '@material-ui/core'

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to='/' />;
	}

	return (
		<div>
			<h1>Log in</h1>
			<form onSubmit={handleLogin}>
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
					Log in
				</Button>
			</form>
		</div>
	);
};

export default withRouter(Login);
