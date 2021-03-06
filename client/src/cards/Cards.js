import React from 'react';
import Card from './CardUI';
import contactKeeper from '../assets/contactkeeper.jpg';
import githubFinder from '../assets/githubfinder.jpg';
import lcOnline from '../assets/lconline.jpg';

// import img1 from ''; here

const Cards = () => {
	const linkContactKeeper =
		'https://intense-springs-56057.herokuapp.com/login#!';
	const linkSignIn =
		'https://github.com/xjr007/Python-projects/raw/master/mysql-python_ENDMOD.zip';
	const linkGithubFinder = 'https://gitfinder-app.netlify.app/';

	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div className='row heading-proj'>
				<h1>Projects</h1>
			</div>
			<div className='row sub-heading'>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<p>Just some of my previous work</p>
			</div>
			<div className='row card-styling'>
				<div className='col-md-2'></div>
				<div className='col'>
					<div className='col-md-4'>
						<Card
							imgsrc={contactKeeper}
							title='Contact Keeper App'
							link={linkContactKeeper}
						/>
					</div>
					<div className='col-md-4'>
						<Card
							imgsrc={githubFinder}
							title='Github Finder App'
							link={linkGithubFinder}
						/>
					</div>
					<div className='col-md-4'>
						<Card
							imgsrc={lcOnline}
							title='Python Sign in/Log out'
							link={linkSignIn}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
