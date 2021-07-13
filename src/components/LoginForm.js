import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';
import GoogleLogin from 'react-google-login';
const LoginForm = () => {
	const [googleId, setGoogleId] = useState('');
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

	useEffect(() => {
		api.getGoogleClient().then((res) => {
			setGoogleId(res);
		});
	}, []);
	if (!googleId) {
		return null;
	}
	return (
		<div>
			<div style={{ width: '100px' }}>
				<GoogleLogin
					clientId={`${googleId}`}
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
