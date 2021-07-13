import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductGrid from './components/ProductGrid';
import './index.css';
import GoogleLogin from 'react-google-login';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
function App() {
	const [cart, setCart] = useState(0);

	useEffect(() => {}, []);

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
			<LoginForm />
			<Nav></Nav>
			<Route path='/cart'>
				<Cart />
			</Route>
			<Route exact path='/'>
				<ProductGrid cart={cart} setCart={setCart} />
			</Route>
		</div>
	);
}

export default App;
