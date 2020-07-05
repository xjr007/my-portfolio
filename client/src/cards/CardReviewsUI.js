import React from 'react';
import Card from 'react-bootstrap/Card';

const CardReviewsUI = (props) => {
	return (
		<Card className='card-review-style'>
			<Card.Header className='card-review-header'>Review</Card.Header>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<p> {props.review} </p>
					<footer className='blockquote-footer'>
						{props.title} <cite title='Source Title'></cite>
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default CardReviewsUI;
