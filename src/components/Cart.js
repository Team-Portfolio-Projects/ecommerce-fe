import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../APIFile';

const Cart = ({ cartItems, setCartItems }) => {
	const unique = useRef();
	const handleClick = () => {
		api.checkoutCart().then((res) => setCartItems(res));
		history.push('/checkout');
	};
	let history = useHistory();
	useEffect(() => {
		//On render checking for localStorage to be there and if local storage is defined get the cart relative to the user
		localStorage.getItem('userId')
			? api.viewCart().then((res) => setCartItems(res))
			: history.goBack();
		//removing the duplicates from our cartItems in a function created below

		removeDuplicates().then(
			(uniqueArray) => uniqueArray && (unique.current = uniqueArray)
		);
	}, []);

	while (!cartItems?.products || !unique.current) {
		return <p>Loading...</p>;
	}
	async function removeDuplicates() {
		//grabbing our array of objects and turning them into JSON
		if (!cartItems?.products) {
			return null;
		}
		let arrayofObjects = await cartItems.products;
		let jsonObject = await arrayofObjects.map(JSON.stringify);
		// creating a Set to remove duplicates from the JSON
		let uniqueSet = new Set(jsonObject);
		// setting the set to be mapped over
		let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
		// returning array to use effects
		return uniqueArray;
	}
	let quanity = {};
	//reducing out cartitems returning an object of the titles and quanities
	quanity = cartItems.products.reduce((acc, data) => {
		if (acc[data.title]) {
			acc[data.title] += 1;
		} else {
			acc[data.title] = 1;
		}
		return acc;
	}, {});

	return (
		<div className='cart'>
			<div className='products'>
				<h2 className='header' id='product'>
					Product
				</h2>
				<h3 className='header' id='quanity'>
					Quanity
				</h3>
				<h3 className='header' id='price'>
					Price
				</h3>
			</div>
			<button onClick={handleClick}>Proceed to Checkout</button>
			{unique.current &&
				unique.current.map((prod, i) => {
					if (!quanity[prod.title]) {
						return null;
					}
					return (
						<div className='products'>
							<h2 className='product-title' key={prod.id}>
								{prod.title}
							</h2>
							<div className='quanity-div'>
								<h3 className='product-quanity'>{quanity[prod.title]}</h3>
								<button
									className='change-quanity'
									id='subtract'
									value={prod._id}
									onClick={(e) => {
										api
											.deleteProduct(e.target.value, cartItems._id)
											.then((res) => setCartItems(res));
									}}>
									-
								</button>
								<button
									className='change-quanity'
									id='add'
									value={prod._id}
									onClick={(e) => {
										api
											.addProduct(e.target.value, cartItems._id)
											.then((res) => setCartItems(res));
									}}>
									+
								</button>
							</div>

							<h3 className='product-price'>{`$ ${(
								quanity[prod.title] * prod.price
							).toFixed(2)}`}</h3>
						</div>
					);
				})}
		</div>
	);
};

export default Cart;
