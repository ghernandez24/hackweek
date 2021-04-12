import React from 'react';
import app from './firebase';
import { useAuth } from './Auth'
import { Button } from '@material-ui/core';

function Home() {
    const { currentUser } = useAuth()
    console.log(currentUser)
    return (
			<div>
				<h1>Home</h1>
				<p>Welcome: {currentUser.email} </p>
				<Button
					variant='contained'
					color='primary'
					onClick={() => app.auth().signOut()}>
					Sign Out
				</Button>
			</div>
		);
}

export default Home;