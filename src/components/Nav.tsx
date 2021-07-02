import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../APIFile'
const Nav: React.FC = () => {
	return (
		<div className='nav'>
			<h1>
				<Link to='/home'>Dragon Warriors</Link>
			</h1>
			<ul className='nav-ul'>
				<li>
					<Link to='/home'>home</Link>
				</li>
				<li>
					<Link
						to='/cart'
						>
						cart
					</Link>
				</li>
				<li>
					<Link
						to='/home'
						onClick={()=>localStorage.clear()}>
						logout
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
