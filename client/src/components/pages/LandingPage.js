import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'materialize-css/dist/css/materialize.min.css';

const LandingPage = () => {
	const onClick = () => {};
	return (
		<Fragment>
			<section className='main-landing'>
				<div className='container'>
					<div className='main-centered'>
						<h1>Hi, I am Aaqiel Behardien</h1>
						<p className='intro-right f-l'>
							A Junior <b>Web Developer</b>
						</p>
						<button
							type='button'
							onClick={onClick}
							className='waves-effect waves-light btn blue-grey darken-3 btn-more'>
							Explore
						</button>
					</div>
				</div>
			</section>
			<section className='main-menu'>
				<div className='container'>
					<h2 className='head-menu'>My Journey</h2>
					<div className='btn-menu grid-2 btn-sz-l'>
						<Link type='button' className='waves-effect waves-light btn blue'>
							Resume
						</Link>
						<Link type='button' className='waves-effect waves-light btn blue'>
							Blog
						</Link>
						<Link type='button' className='waves-effect waves-light btn blue'>
							Reviews
						</Link>
						<Link type='button' className='waves-effect waves-light btn blue'>
							Projects
						</Link>
						<Link
							type='button'
							to='/contact'
							className='waves-effect waves-light btn blue'>
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
				</div>
			</section>
			<section className='main-contact'>
				<div className='container'>
					<h2>contact menu</h2>
				</div>
			</section>
		</Fragment>
	);
};

export default LandingPage;
