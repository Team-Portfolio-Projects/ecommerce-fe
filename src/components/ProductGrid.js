import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
function ProductGrid() {
	const [products, setProducts] = useState();
	const [category, setCategory] = useState('');
	useEffect(() => {
		//grabbing products on load
		api.getProducts().then((res) => {
			setProducts(res);
		});
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (category === 'everything') {
			// everything resets to default
			api.getProducts().then((res) => setProducts(res));
		} else {
			// changing genre the products are sorted by
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
						// on change make state change to be ready to be submitted
						onChange={(e) => setCategory(e.target.value)}>
						<option value={'everything'}>Everything!</option>
						<option value={"women's clothing"}>Womens Clothing</option>
						<option value={'electronics'}>Electronics</option>
						<option value={'jewelery'}>Jewelery</option>
						<option value={"men's clothing"}>Men's Clothing</option>
					</select>
				</label>
				<button type='submit' className='submit-button'>
					GO
				</button>
			</form>

			<div className='product-grid'>
				{products &&
					//displaying the products grid
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
								<IconButton
									color='primary'
									aria-label='add to shopping cart'
									//allowing customers to add a product to their cart creating one if needed

									onClick={() => api.handleAdd(product)}>
									<AddShoppingCartIcon
										style={{ fill: 'darkgrey', size: 'larger' }}
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
