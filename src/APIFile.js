export const logout = () => {
	const url = 'http://localhost:3000/auth/logout';
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then((res) => res.json());
};
export const getProducts = () => {
	const url = 'http://localhost:3000/api/products';
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((res) => res.json())
		.then((res) => res);
};

export const viewCart = () => {
	return fetch('http://localhost:3000/api/cart', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};

export const emptyCart = async () => {
	const res = await fetch('http://localhost:3000/api/cart', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => console.log(res));
};

export const handleAdd = async (product, cart, setCart) => {
	const res = await fetch('http://localhost:3000/api/cart', {
		method: 'POST',
		body: JSON.stringify({ products: product._id, paid: false }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	setCart(cart + 1);
};
