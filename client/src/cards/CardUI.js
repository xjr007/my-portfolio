import React from 'react';
import './Cards.css';

const Card = (props) => {
	return (
		<div className='card text-center shadow'>
			<div className='overflow'>
				<img src={props.imgsrc} alt='' className='card-img-top' />
			</div>
			<div className='card-body text-dark'>
				<h4 className='card-title'>{props.title}</h4>
				<p className='card-text text-secondary'></p>
				<a
					rel='noopener noerferrer'
					target='_blank'
					href={props.link}
					className='btn btn-outline-success btn-move'
					style={{ backgroundColor: 'white', color: 'black' }}>
					View
				</a>
			</div>
		</div>
	);
};

export default Card;
