import React, { useState, useEffect } from 'react';
import * as api from '../APIFile';

const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		api.viewCart().then((res) => console.log(res));
	}, []);

	return <div></div>;
};

export default Cart;
