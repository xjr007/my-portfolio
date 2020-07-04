import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';

const LandingPage = () => {
	const onClick = () => {};
	return (
		<Fragment>
			<section className='main-landing scrollbar-hidden'>
				<div className='main-centered'>
					<h1>Hi, I am Aaqiel Behardien</h1>
					<p className='f-l'>
						A Junior <b>Web Developer</b>
					</p>
					<button
						type='button'
						onClick={onClick}
						className='waves-effect waves-light btn brown darken-3 main-btn-landing'>
						Explore
					</button>
				</div>
			</section>

			<section className='main-menu'>
				<h2 className='heading-btn-menu'>My Journey</h2>
				<div className='grid-menu'>
					<Link
						type='button'
						to='my-portfolio/resume'
						className='waves-effect waves-light btn brown btn-menu'>
						Resume
					</Link>
					<Link
						type='button'
						to='my-portfolio/about'
						className='waves-effect waves-light btn brown btn-menu'>
						About
					</Link>
					<Link
						type='button'
						to='my-portfolio/reviews'
						className='waves-effect waves-light btn brown btn-menu'>
						Reviews
					</Link>
					<Link
						type='button'
						to='my-portfolio/projects'
						className='waves-effect waves-light btn brown btn-menu'>
						Projects
					</Link>
					<Link
						type='button'
						to='my-portfolio/contact'
						className='waves-effect waves-light btn brown btn-menu'>
						Contact
					</Link>
				</div>

				<div className='msg-menu'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
						perferendis, quam mollitia quis nesciunt adipisci beatae nemo aspernatur
						fuga, magni quibusdam labore quod ad cumque eos est dolor pariatur modi!
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