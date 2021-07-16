import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';
const Checkout = ({ cartItems, setCartItems }) => {
	useEffect(() => {
		api.viewCart().then((res) => setCartItems(res));
	}, []);
	let total = 0;
	while (!cartItems?.purchased.length) {
		return <h1>You have not made any purchases with us</h1>;
	}
	cartItems?.purchased.forEach((prod) => {
		total += prod.total;
	});
	return (
		<div>
			<h1>Thank you for shopping with us today!</h1>
			<h3>you purchased a total of products for $</h3>
			<h2>Previous Purchases</h2>
			<div>
				{cartItems.purchased.map((purch) => {
					purch.product.map((prod) => console.log(prod));
				})}
			</div>
		</div>
	);
};

export default Checkout;
