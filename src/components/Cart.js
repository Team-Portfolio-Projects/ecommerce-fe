import { prettyDOM } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import * as api from '../APIFile';

const Cart = () => {
	const [cartItems, setCartItems] = useState({});
	const [unique, setUnique] = useState({});
	const handleClick = () => {
		api.emptyCart().then((res) => setCartItems(res));
	};
	let quanity = {};
	useEffect(() => {
		localStorage.getItem('userId') &&
			api.viewCart().then((res) => setCartItems(res));
	}, []);
	quanity =
		cartItems.products &&
		cartItems.products.reduce((acc, data) => {
			if (acc[data.title]) {
				acc[data.title] += 1;
				data['quanity'] += 1;
			} else {
				data['quanity'] = 1;
				acc[data.title] = 1;
			}
			return acc;
		}, {});
	console.log(quanity);
	// const removeDuplicates = (arr) => {
	// 	const unique = []

	// };
	console.log(quanity);
	// const titles = Object.keys(quanity);
	// console.log(titles);
	// cartItems.products.forEach((prod) => {
	// 	let arr = [];
	// 	console.log(prod._id);
	// 	console.log(arr.indexOf(prod._id));
	// 	if (arr.indexOf(prod._id) === -1) {
	// 		arr.push(prod._id);
	// 	}
	// 	console.log(arr);
	// });
	const handleDuplicates = (obj) => {
		let unique = {};
		for (let i = 0, len = obj.products.length; i < len; i++) {
			// unique[obj.products['title']] = unique.title
			// unique[obj.products['_id'] = unique
		}
	};

	// handleDuplicates(cartItems);
	// setCartItems(res[0]?.products);
	// let total = cartItems.reduce((acc, items) => {
	// 	return items.price + acc;
	// }, 0);
	// console.log(total);

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
			{cartItems?.products &&
				cartItems.products.map((prod, i) => {
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
									onClick={() => {
										api
											.deleteProduct(i, cartItems._id)
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

							<h3 className='product-price'>{`$ ${prod.price}`}</h3>
						</div>
					);
				})}
			<button onClick={handleClick}>Proceed to Checkout</button>
		</div>
	);
};

export default Cart;
