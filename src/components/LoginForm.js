import React, { useEffect, useState } from 'react';
import * as api from '../APIFile';
import GoogleLogin from 'react-google-login';
const LoginForm = ({ user, setUser }) => {
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
		setUser(data);
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
		<div className='login-grid'>
			<div className='google'>
				<GoogleLogin
					clientId={`${googleId}`}
					buttonText='Log in with Google'
					onSuccess={handleLogin}
					onFailure={handleLogin}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
			<p className='basic-user'>User: basictester5363@gmail.com </p>
			<p className='basic-pass'>Password: TestMyCode!</p>
			{user && (
				<div className='google-data'>
					<img
						className='google-img'
						alt='users google account'
						src={user.googlePicture}
					/>
					<p className='welcome'>Welcome {user.displayName}!</p>
				</div>
			)}
		</div>
	);
};

export default LoginForm;
