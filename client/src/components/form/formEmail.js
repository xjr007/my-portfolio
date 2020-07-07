import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';

const FormEmail = () => {
	const [status, setStatus] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('SUCCESS');
			} else {
				setStatus('ERROR');
			}
		};
		xhr.send(data);
	};

	return (
		<Fragment>
			<div className='form-background'>
				<Form
					onSubmit={onSubmit}
					action='https://formspree.io/xjvaapgv'
					method='POST'>
					<h3 className='form-heading'>
						Contact Me
						<p className='form-sub-head'>
							Like what you see? Get in touch and drop a comment down below.
						</p>
					</h3>

					<Form.Group>
						<Form.Label htmlFor='full-name' style={{ color: 'white' }}>
							Full Name
						</Form.Label>
						<Form.Control
							id='full-name'
							name='name'
							type='text'
							style={{
								maxWidth: '200px',
								backgroundColor: 'white',
								borderRadius: '5px',
							}}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='email' style={{ color: 'white' }}>
							Email
						</Form.Label>
						<Form.Control
							id='email'
							name='email'
							type='email'
							style={{
								maxWidth: '350px',
								backgroundColor: 'white',
								borderRadius: '5px',
							}}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor='message' style={{ color: 'white' }}>
							Message
						</Form.Label>
						<Form.Control
							id='message'
							name='message'
							as='textarea'
							row='10'
							style={{ maxWidth: '400px', maxHeight: '200px' }}
						/>
					</Form.Group>
					{status === 'SUCCESS' ? (
						<p>Sent</p>
					) : (
						<input
							type='submit'
							variant='primary'
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
					)}
					{status === 'ERROR' && <p>Not sent</p>}
				</Form>
			</div>
		</Fragment>
	);
};

export default FormEmail;
