import React, { Fragment } from 'react';

import Review from '../../cards/CardReviews';
import Navbar from '../layout/Navbar';

const ReviewPage = () => {
	return (
		<Fragment>
			<div className='review-layout'>
				<Navbar />
				<Review />
			</div>
		</Fragment>
	);
};

export default ReviewPage;
