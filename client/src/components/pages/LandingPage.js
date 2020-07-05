import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {
	CONTACT_PAGE,
	PROJECT_PAGE,
	ABOUT_PAGE,
	RESUME_PAGE,
	REVIEWS_PAGE,
} from '../../components/layout/links/Links';

const LandingPage = () => {
	return (
		<Fragment>
			<section className='main-landing scrollbar-hidden'>
				<div className='main-centered'>
					<h1>Hi, I am Aaqiel Behardien</h1>
					<p className='f-l'>
						A Junior <b>Web Developer</b>
					</p>
					<a
						type='button'
						href='#section-menu'
						className='waves-effect waves-light btn brown darken-3 main-btn-landing'>
						Explore
					</a>
				</div>
			</section>

			<section id='section-menu' className='main-menu'>
				<h2 className='heading-btn-menu'>My Journey</h2>
				<div className='grid-menu'>
					<Link
						type='button'
						to={RESUME_PAGE}
						className='waves-effect waves-light btn brown btn-menu'>
						Resume
					</Link>
					<Link
						type='button'
						to={REVIEWS_PAGE}
						className='waves-effect waves-light btn brown btn-menu'>
						Reviews
					</Link>
					<Link
						type='button'
						to={PROJECT_PAGE}
						className='waves-effect waves-light btn brown btn-menu'>
						Projects
					</Link>
					<Link
						type='button'
						to={CONTACT_PAGE}
						className='waves-effect waves-light btn brown btn-menu'>
						Contact
					</Link>
				</div>

				<div className='msg-menu'>
					<p>
						In the year of the pandemic (2020), that's when I decided it is time to
						re-shape my life. Join me on my journey and explore the "now".
					</p>
				</div>
			</section>
			<section>
				<h6 style={{ textAlign: 'center' }}>abaaqielbehardien@gmail.com</h6>
			</section>
		</Fragment>
	);
};

export default LandingPage;
