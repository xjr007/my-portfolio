import React, { Fragment } from 'react';

import Review from '../../cards/CardReviews';
import Navbar from '../layout/Navbar';

const ReviewPage = () => {
	return (
		<Fragment>
			<Navbar />
			<Review />
		</Fragment>
	);
};

export default ReviewPage;
