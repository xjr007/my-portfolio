import React from 'react';
import Card from './CardReviewsUI';
import { GODWIN_COMMENT, JASON_COMMENT } from '../assets/reviews/Comments';

const CardReviews = () => {
	return (
		<div className='container justify-content-center'>
			<div className='row heading-proj '>Feedback</div>
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

					<Card review='Review message' title='Person 1' />
				</div>
			</div>
		</div>
	);
};

export default CardReviews;
