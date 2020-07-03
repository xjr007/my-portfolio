import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
	return (
		<nav className='navbar nav-colour'>
			<ul>
				<li className='back-landing nav-item'>
					<Link to='/my-portfolio'>Aaqiel Behardien</Link>
				</li>
			</ul>

			<ul className='nav-dir'>
				<li className='nav-item'>
					<Link to='/projects'>Projects</Link>
				</li>
				<li className='nav-item'>
					<Link to='/reviews'>Reviews</Link>
				</li>
				<li className='nav-item'>
					<Link to='/resume'>Resume</Link>
				</li>
				<li className='nav-item'>
					<Link to='/About'>About</Link>
				</li>
				<li className='nav-item'>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
