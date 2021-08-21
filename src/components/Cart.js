import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../APIFile';

const Cart = ({ cartItems, setCartItems }) => {
	const [loading, setLoading] = useState(true);
	const unique = useRef();
	let history = useHistory();
	const handleClick = () => {
		// when proceed to checkout is clicked contact api move items from cart to purchased and then send the user to the checkout component
		api.checkoutCart().then((res) => setCartItems(res));
		history.push('/checkout');
	};
	var quanity = {};
	useEffect(() => {
		//On render checking for localStorage to be there and if local storage is defined get the cart relative to the user
		localStorage.getItem('userId')
			? api.viewCart().then((res) => {
					setCartItems(res);
					setLoading(false);
			  })
			: history.goBack();
		//removing the duplicates from our cartItems in a function created below

		//reducing out cartitems returning an object of the titles and quanities

		removeDuplicates().then(
			(uniqueArray) => uniqueArray && (unique.current = uniqueArray)
		);
	}, []);

	// while (!cartItems?.products || !unique.current) {
	// 	return <p>Loading...</p>;
	// }

	if (cartItems.products && cartItems.products.length > 0) {
		quanity = cartItems.products.reduce((acc, data) => {
			if (acc[data.title]) {
				acc[data.title] += 1;
			} else {
				acc[data.title] = 1;
			}
			return acc;
		}, {});
	}

	console.log(quanity);
	console.log(cartItems);
	async function removeDuplicates() {
		//grabbing our array of objects and turning them into JSON
		if (cartItems.products && cartItems.products.length > 0) {
			let arrayofObjects = await cartItems.products;
			let jsonObject = await arrayofObjects.map(JSON.stringify);
			// creating a Set to remove duplicates from the JSON
			let uniqueSet = new Set(jsonObject);
			// setting the set to be mapped over
			let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
			// returning array to use effects
			return uniqueArray;
		}
	}

	return loading ? (
		<p>loading</p>
	) : (
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
						<div className='products' key={prod._id}>
							<h2 className='product-title' key={prod.title}>
								{prod.title}
							</h2>
							<div className='quanity-div' key={prod._id}>
								<h3 className='product-quanity'>{quanity[prod.title]}</h3>
								<button
									className='change-quanity'
									id='subtract'
									value={prod._id}
									onClick={(e) => {
										//deleting product sending cart id and product id
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
										//adding a product sending cart id and product id
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
