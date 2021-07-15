import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Nav = ({ setUser }) => {
	const handleLogout = () => {
		localStorage.clear();
		setUser(null);
	};
	return (
		<div className='nav'>
			<h1 className='title'>
				<Link to='/'>E-commerce</Link>
			</h1>
			<ul className='nav-ul'>
				<li style={{ height: '25px' }}>
					<Link to='/cart'>
						<ShoppingCartIcon />
					</Link>
				</li>
				<li>
					<Link to='/' onClick={handleLogout}>
						logout
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
