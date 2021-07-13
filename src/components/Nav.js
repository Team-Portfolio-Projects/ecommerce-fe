import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../APIFile';
const Nav = () => {
	return (
		<div className='nav'>
			<h1 className='title'>
				<Link to='/'>Dragon Warriors</Link>
			</h1>
			<ul className='nav-ul'>
				<li>
					<Link to='/'>home</Link>
				</li>
				<li>
					<Link to='/cart'>cart</Link>
				</li>
				<li>
					<Link to='/' onClick={() => localStorage.clear()}>
						logout
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
