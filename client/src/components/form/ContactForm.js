import React, { Fragment } from 'react';
import '../../App.css';
import { Form, Row, Col, FormGroup, FormControl } from 'react-bootstrap';

const ContactForm = () => {
	return (
		<Fragment>
			<Form className='form-background'>
				<h3 className='form-heading'>
					Contact Me
					<p className='form-sub-head'>
						Like what you see? Get in touch and drop a comment down below.
					</p>
				</h3>

				<Row>
					<FormGroup as={Col} style={{ padding: '0', marginBottom: '40px' }}>
						<Form.Label style={{ color: 'white' }}>Name</Form.Label>
						<Form.Control
							placeholder='Name'
							style={{ backgroundColor: 'white', borderRadius: '5px' }}
						/>
					</FormGroup>
				</Row>
				<Row>
					<FormGroup>
						<Form.Label style={{ color: 'white' }}>Message</Form.Label>
						<FormControl
							as='textarea'
							placeholder='Message'
							style={{
								left: '10px',
								width: '100%',
								height: '150px',
								backgroundColor: 'white',
							}}
						/>
					</FormGroup>
				</Row>
				<Row>
					<input
						type='submit'
						rel='noopener noerferrer'
						target='_blank'
						href='#'
						className='btn btn-outline-success btn-move'
						style={{
							backgroundColor: 'white',
							color: 'black',
							marginLeft: '0',
						}}
						value='Submit'
					/>
				</Row>
			</Form>
		</Fragment>
	);
};

export default ContactForm;
