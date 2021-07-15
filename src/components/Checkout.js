import React, { useEffect, useState } from 'react';

const Checkout = ({ cartItems, setCartItems }) => {
	useEffect(() => {}, []);
	let total = 0;
	cartItems?.purchased.forEach((prod) => {
		total += prod.total;
	});
	while (!cartItems.purchased.length) {
		return <h1>You have not made any purchases with us</h1>;
	}
	return (
		<div>
			<h1>Thank you for shopping with us today!</h1>
			<h3>you purchased a total of products for $</h3>
			<h2>Previous Purchases</h2>
			<div>
				{cartItems.purchased.map((purch) => {
					purch.products.map((prod) => console.log(prod));
				})}
			</div>
		</div>
	);
};

export default Checkout;
