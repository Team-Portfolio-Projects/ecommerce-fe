import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';

function ProductGrid() {
	const [products, setProducts] = useState();

	useEffect(() => {
		api.getProducts().then((res) => {
			console.log(res);
			setProducts(res);
		});
	}, []);

	return (
		<div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gridGap: '10px',
				}}>
				{products &&
					products.map((product) => {
						return (
							<div
								key={product._id}
								style={{ border: '2px solid black', padding: '5px' }}>
								<p>{product.title}</p>
								<img
									style={{ width: '50px' }}
									src={product.image}
									alt={product.title}
								/>
								<p>{`$${product.price}`}</p>
								<p>{product.description}</p>
								<button onClick={() => api.handleAdd(product)}>
									Add to Cart
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default ProductGrid;
