import React, { Fragment } from 'react';
import ContactForm from '../form/ContactForm';

import Navbar from '../layout/Navbar';

const ContactPage = () => {
	return (
		<Fragment>
			<Navbar />
			<div className='container'>
				<ContactForm />
			</div>
		</Fragment>
	);
};

export default ContactPage;
