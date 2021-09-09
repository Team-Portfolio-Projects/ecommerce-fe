import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';
const Checkout = ({ cartItems, setCartItems }) => {
	useEffect(() => {
		api.viewCart().then((res) => setCartItems(res));
	}, []);

	while (!cartItems?.purchased?.length) {
		return <h1>You have not made any purchases with us</h1>;
	}

	return (
		<div>
			<h1>Thank you for shopping with us today!</h1>
			<h2>Previous Purchases</h2>
			<div>
				{cartItems.purchased.map((purch, i) => {
					if (purch.product.length === 0) {
						return null;
					}
					return (
						<div className='purchased-div'>
							<p className='purchased-date'>
								Order {i + 1} Purchased on : {purch.date}
							</p>
							{purch?.product?.map((prod) => {
								return (
									<div className='map-div'>
										<h2 className='purchased-title'>{prod.title}</h2>
										<h3 className='purchased-price'>$ {prod.price}</h3>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Checkout;
