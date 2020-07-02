import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../form/ContactForm';

import Navbar from '../layout/Navbar';

const ContactPage = () => {
	return (
		<Fragment>
			<Navbar />
			<ContactForm className='contact-form' />
		</Fragment>
	);
};

export default ContactPage;
