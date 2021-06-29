export const getUser = () => {
	const url = 'http://localhost:3000/auth/google/callback';
	fetch(url, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
        .then(res => res.json())
		.then((res) => console.log(res))
};
