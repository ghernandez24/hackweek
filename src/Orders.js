import React, { useState, useEffect } from 'react';
import './App.css';

// import dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';


function Orders() {
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	// USED TO ACCESSS FIREBASE LIBRARY
	const ref = firebase.firestore().collection('orders');
	console.log(ref);

	function getOrders() {
		setLoading(true);
		//onSnapshot is a firebase reference to generate the date in realtime -
		ref.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				items.push(doc.data());
			});
			setOrders(items);
			setLoading(false);
		});
	}

	useEffect(() => {
		getOrders();
	}, []);

	if (loading) {
		return <h1>Fetching food order....</h1>;
	}

	return (
		<div>
			<h1>Food Order</h1>
			{orders.map((order) => (
				<div key={order.id}>
					<h2>{order.ingredient}</h2>
					<h2>{order.ingredienttwo}</h2>
					<p>{order.amount}</p>
				</div>
			))}
		</div>
	);
}

export default Orders;