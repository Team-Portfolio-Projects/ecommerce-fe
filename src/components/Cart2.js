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
					// if (!quanity[prod.title]) {
					// 	return null;
					// }
					return (
						<div className='products' key={prod._id}>
							<h2 className='product-title' key={prod._id}>
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