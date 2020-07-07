import React, { Fragment } from 'react';
import FormEmail from '../form/formEmail';

import Navbar from '../layout/Navbar';

const ContactPage = () => {
	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<FormEmail />
			</div>
		</Fragment>
	);
};

export default ContactPage;
