import React from 'react';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import ProductGrid from './components/ProductGrid';
import './index.css';
import Cart from './components/Cart';
import LoginForm from './components/LoginForm';
function App() {
	const [cart, setCart] = useState(0);
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
