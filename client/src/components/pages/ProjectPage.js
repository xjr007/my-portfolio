import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Card from '../../cards/Cards';

const ProjectPage = () => {
	return (
		<Fragment>
			<div className='page-layout'>
				<Navbar />
				<Card />
			</div>
		</Fragment>
	);
};

export default ProjectPage;
