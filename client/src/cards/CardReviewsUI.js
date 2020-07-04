import React from 'react';
import Card from 'react-bootstrap/Card';

const CardReviewsUI = (props) => {
	return (
		<Card style={{ backgroundColor: 'white', color: 'black', width: '700px' }}>
			<Card.Header
				style={{
					paddingLeft: '10px',
					fontSize: '25px',
					backgroundColor: 'pink',
					color: 'black',
				}}>
				Review
			</Card.Header>
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
