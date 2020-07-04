import React, { Fragment } from 'react';
import ContactForm from '../form/ContactForm';

import Navbar from '../layout/Navbar';

const ContactPage = () => {
	return (
		<Fragment>
			<div className='page-layout'>
				<Navbar />
				<ContactForm />
			</div>
		</Fragment>
	);
};

export default ContactPage;
