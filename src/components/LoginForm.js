import React from 'react';
import GoogleLogin from 'react-google-login';
const LoginForm = () => {
	const handleLogin = async (googleData) => {
		const res = await fetch('http://localhost:3000/auth/google', {
			method: 'POST',
			body: JSON.stringify({
				token: googleData.tokenId,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		localStorage.setItem('userId', data._id);
	};
	return (
		<div>
			<div style={{ width: '100px' }}>
				<GoogleLogin
					clientId='724343472595-5p9le63sa99h2hckb905dagmr4379p6t.apps.googleusercontent.com'
					buttonText='Log in with Google'
					onSuccess={handleLogin}
					onFailure={handleLogin}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		</div>
	);
};

export default LoginForm;
