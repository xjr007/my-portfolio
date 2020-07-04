import React, { Component } from 'react';
import Card from './CardReviewsUI';
import contactKeeper from '../assets/contactkeeper.jpg';
import githubFinder from '../assets/githubfinder.jpg';
import lcOnline from '../assets/lconline.jpg';

// import img1 from ''; here

const CardReviews = () => {
	return (
		<div className='container-fluid d-flex justify-content-center'>
			<div
				className='row heading-proj '
				style={{ padding: '0', margin: '0', border: '0', width: '300px' }}>
				Reviews
			</div>
			<div
				className='row'
				style={{ padding: '0', margin: '0', border: '0', width: '300px' }}>
				<Card review='Review message' title='Person 1' />
				<Card review='Review message' title='Person 1' />
				<Card review='Review message' title='Person 1' />
			</div>
		</div>
	);
};

export default CardReviews;
