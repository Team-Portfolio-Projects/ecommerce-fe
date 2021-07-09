import { prettyDOM } from '@testing-library/react';
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
	let quantity =
		cartItems.products &&
		cartItems.products.reduce((acc, data) => {
			if (acc[data.title]) {
				acc[data.title] += 1;
			} else {
				acc[data.title] = 1;
			}
			return acc;
		}, {});
	console.log(quantity);
	// setCartItems(res[0]?.products);
	// let total = cartItems.reduce((acc, items) => {
	// 	return items.price + acc;
	// }, 0);
	// console.log(total);

	return (
		<div>
			<button onClick={handleClick}>Checkout</button>
			{cartItems?.products &&
				cartItems.products.map((prod, i) => {
					return (
						<div className='cart' key={prod.id}>
							<h2 key={prod.id}>{prod.title}</h2>
							<h3>{prod.price}</h3>
							<button
								value={prod._id}
								onClick={() => {
									api
										.deleteProduct(i, cartItems._id)
										.then((res) => setCartItems(res));
								}}>
								-
							</button>
							<button
								value={prod._id}
								onClick={(e) => {
									api
										.addProduct(e.target.value, cartItems._id)
										.then((res) => setCartItems(res));
								}}>
								+
							</button>
						</div>
					);
				})}
		</div>
	);
};

export default Cart;
