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
			<div className='product-grid'>
				{products &&
					products.map((product) => {
						return (
							<div className='card' key={product._id}>
								<p>{product.title}</p>
								<img
									style={{ width: '150px' }}
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
