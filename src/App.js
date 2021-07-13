import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductGrid from './components/ProductGrid';
import './index.css';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
function App() {
	const [cartItems, setCartItems] = useState({});
	return (
		<div>
			<LoginForm />
			<Nav></Nav>
			<Route path='/cart'>
				<Cart cartItems={cartItems} setCartItems={setCartItems} />
			</Route>
			<Route exact path='/'>
				<ProductGrid cartItems={cartItems} setCartItems={setCartItems} />
			</Route>
		</div>
	);
}

export default App;
