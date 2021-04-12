import React from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import './App.css';

import Home from './Home';
import Orders from './Orders';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';

function App() {

	return (
		<AuthProvider>
			<div>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Sign Up</Link>
				</nav>
				<Switch>
					<PrivateRoute exact path='/' component={Home} />
					<Route path='/orders' component={Orders} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={SignUp} />
				</Switch>
			</div>
		</AuthProvider>
	);
}

export default App;
