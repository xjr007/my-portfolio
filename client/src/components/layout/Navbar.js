import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import {
	CONTACT_PAGE,
	PROJECT_PAGE,
	ABOUT_PAGE,
	RESUME_PAGE,
	REVIEWS_PAGE,
} from '../../components/layout/links/Links';

const Navbar = () => {
	return (
		<nav className='navbar nav-colour'>
			<ul>
				<li className='back-landing nav-item'>
					<Link className='nav-name' to='my-portfolio'>
						Aaqiel Behardien
					</Link>
				</li>
			</ul>

			<ul className='nav-dir'>
				<li className='nav-item'>
					<Link to={PROJECT_PAGE} className='nav-links'>
						Projects
					</Link>
				</li>
				<li className='nav-item'>
					<Link to={REVIEWS_PAGE} className='nav-links'>
						Reviews
					</Link>
				</li>
				<li className='nav-item'>
					<Link to={RESUME_PAGE} className='nav-links'>
						Resume
					</Link>
				</li>
				<li className='nav-item'>
					<Link to={ABOUT_PAGE} className='nav-links'>
						About
					</Link>
				</li>
				<li className='nav-item'>
					<Link to={CONTACT_PAGE} className='nav-links'>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
