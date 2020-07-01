import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

const ContactPage = () => {
	return (
		<Fragment>
			<Link to='/' className='waves-effect waves-light btn blue-grey darken-3'>
				{' '}
				Back to Landing
			</Link>
		</Fragment>
	);
};

export default ContactPage;
