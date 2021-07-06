import React, { useState, useEffect } from 'react';
import * as api from '../APIFile';

const Cart = () => {
	const [cartItems, setCartItems] = useState({});
	const handleClick = () => {
		api.emptyCart().then((res) => setCartItems(res));
	};
	useEffect(() => {
		api.viewCart().then((res) => setCartItems(res));
	}, []);
	// setCartItems(res[0]?.products);
	let quantity =
		cartItems?.products &&
		cartItems?.products.reduce((acc, data) => {
			if (acc[data.title]) {
				acc[data.title] += 1;
			} else {
				acc[data.title] = 1;
			}
			return acc;
		}, {});
	// let total = cartItems.reduce((acc, items) => {
	// 	return items.price + acc;
	// }, 0);
	// console.log(total);
	console.log(quantity);
	return (
		<div>
			<button onClick={handleClick}>Checkout</button>
			{cartItems?.products &&
				cartItems.products.map((prod) => {
					return (
						<div className='cart' key={prod.id}>
							<h2>{prod.title}</h2>
							<h3>{prod.price}</h3>
							<h3 className={prod.paid ? 'paid' : 'unpaid'}></h3>
						</div>
					);
				})}
		</div>
	);
};

export default Cart;
