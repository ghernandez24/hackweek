// This component will store our auth status
import React, { useContext, useEffect, useState } from 'react';
import app from './firebase';
// import { auth } from './firebase'

// tool used to propogate data
export const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

// provide component that holds the authentication status
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true)

	// function signup(email, password) {
	// 	return auth.createUserWithEmailAndPassword(email, password)
	// }
	
	// function login(email, password) {
	// 	return auth.signInWithEmailAndPassword(email, password)
	// }
	
	// function logout() {
	// 	return auth.signOut()
	// }
	
	useEffect(() => {
		app.auth().onAuthStateChanged((user)=> {
            setCurrentUser(user)
            setPending(false)
        });
	}, []);

    if(pending){
        return <>Loading...</>
    }

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
