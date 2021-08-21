export const getGoogleClient = () => {
	return fetch('http://localhost:3000/auth/client', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((res) => res);
};

export const logout = () => {
	fetch('http://localhost:3000/auth/logout', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then((res) => res.json());
};
export const getProducts = () => {
	return fetch('http://localhost:3000/api/products', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((res) => res);
};

export const viewCart = () => {
	return fetch(
		`http://localhost:3000/api/cart/${localStorage.getItem('userId')}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	).then((res) => res.json());
};

export const checkoutCart = async () => {
	fetch(
		`http://localhost:3000/api/cart/checkout/${localStorage.getItem('userId')}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	).then((res) => res.json());
};

export const handleAdd = async (product) => {
	await fetch('http://localhost:3000/api/cart', {
		method: 'POST',
		body: JSON.stringify({
			products: product._id,
			paid: false,
			owner: localStorage.getItem('userId'),
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const deleteProduct = (index, id) => {
	return fetch(`http://localhost:3000/api/cart/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({
			index: index,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};

export const addProduct = (prod_id, id) => {
	return fetch(`http://localhost:3000/api/cart/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			prod_id: prod_id,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};

export const getCategory = (category) => {
	return fetch(`http://localhost:3000/api/products/${category}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};
export const postSignUp = (user, setError) => {
	const url = `http://localhost:3000/auth/signup`;
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch(() => setError(true));
};
