import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function ProductGrid() {
	const [products, setProducts] = useState();
	const [category, setCategory] = useState('');
	useEffect(() => {
		api.getProducts().then((res) => {
			setProducts(res);
		});
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (category === 'everything') {
			api.getProducts().then((res) => setProducts(res));
		} else {
			api.getCategory(category).then((res) => setProducts(res));
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					What are you looking for?
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value={'everything'}>Everything!</option>
						<option value={"women's clothing"}>Womens Clothing</option>
						<option value={'electronics'}>Electronics</option>
						<option value={'jewelery'}>Jewelery</option>
						<option value={"men's clothing"}>Men's Clothing</option>
					</select>
				</label>
				<input type='submit' value='Go' />
			</form>

			<div className='product-grid'>
				{products &&
					products.map((product) => {
						return (
							<div className='card' key={product._id}>
								<p>{product.title}</p>
								<img
									className='product-img'
									src={product.image}
									alt={product.title}
								/>
								<p>{`$${product.price}`}</p>
								<p className='product-description'>{product.description}</p>
								<IconButton color='primary' aria-label='add to shopping cart'>
									<AddShoppingCartIcon
										style={{ fill: 'darkgrey', size: 'larger' }}
										onClick={() => api.handleAdd(product)}
									/>
								</IconButton>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default ProductGrid;
