import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Me from '../../assets/aaqiel.jpg';
const AboutPage = () => {
	return (
		<Fragment>
			<Navbar />
			<div className='about-box'>
				<img src={Me} alt='photo' className='profile-photo' />
				<div className='about-info'>
					<h1>About Aaqiel Behardien</h1>
					<p style={{ width: '800px' }}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas aliquam
						reprehenderit id nihil, veniam eius quisquam iure vero asperiores, iste
						dolorum adipisci neque ducimus voluptas doloribus magni odio unde nobis!
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default AboutPage;
