import React from 'react';

const CardReviewsUI = (props) => {
	return (
		<div className='card shadow'>
			<div className='card-header'> Review</div>
			<div className='card-body'>
				<div className='card-title'>{props.title}</div>
				<div className='card-text'>{props.review}</div>
			</div>
		</div>
	);
};

export default CardReviewsUI;
