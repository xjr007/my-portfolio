import React from 'react';
import Card from './CardReviewsUI';
import {
	GODWIN_COMMENT,
	JASON_COMMENT,
	MISCHA_COMMENT,
} from '../assets/reviews/Comments';

const CardReviews = () => {
	return (
		<div className='container justify-content-center'>
			<div className='row heading-proj '>Feedback</div>
			<p className='row sub-heading-proj'>What people have to say about me</p>
			<div className='row card-placement'>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'></div>
				<div className='col'>
					<Card
						review={GODWIN_COMMENT}
						title='Godwin Dzvapatsva (Head of Curriculum and Learning)'
					/>
					<Card review={JASON_COMMENT} title='Jason Wandrag (Lecturer)' />
					<Card review={MISCHA_COMMENT} title='Mischa Achmat' />
				</div>
			</div>
		</div>
	);
};

export default CardReviews;
