export const logout = () => {
	const url = 'http://localhost:3000/auth/logout';
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
        .then(res => res.json())
};
export const getProducts = ()=>{
	const url = 'http://localhost:3000/product';
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
        .then(res => res.json())
}