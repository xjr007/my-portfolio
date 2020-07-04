import React from 'react';
import '../../App.css';
import {
	Form,
	Row,
	Col,
	FormGroup,
	FormLabel,
	FormControl,
} from 'react-bootstrap';

// <form>
// 	<input type='text' placeholder='name' name='name' />
// 	<input type='text' placeholder='email' name='email' />
// 	<input type='text' placeholder='message' name='message' />

// 	<button className='btn waves-effect waves-light' type='submit' name='action'>
// 		Submit
// 		<i className='material-icons right'>send</i>
// 	</button>
// </form>

const ContactForm = () => {
	return (
		<Form
			style={{
				position: 'fixed',
				right: '35%',
				top: '20%',
				width: '500px',
				padding: '40px',
				overflow: 'hidden',
				backgroundColor: '#2b2222',
				color: 'white',
				borderRadius: '10px',
			}}>
			<h3
				style={{
					padding: '0',
					margin: '0',
					marginBottom: '50px',
					left: '0%',
					position: 'relative',
					width: '100%',
				}}>
				Contact Me
			</h3>
			<Row>
				<FormGroup as={Col} style={{ padding: '0', marginBottom: '40px' }}>
					<Form.Label>Name</Form.Label>
					<Form.Control
						placeholder='Name'
						style={{ backgroundColor: 'white', borderRadius: '5px' }}
					/>
				</FormGroup>
				<FormGroup as={Col} style={{ marginLeft: '0px', padding: '0' }}>
					<Form.Label style={{ marginLeft: '27px' }}>Email</Form.Label>
					<Form.Control
						placeholder='Email'
						style={{
							marginLeft: '27px',
							backgroundColor: 'white',
							borderRadius: '5px',
						}}
					/>
				</FormGroup>
			</Row>
			<Row>
				<FormGroup>
					<Form.Label>Message</Form.Label>
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
		</Form>
	);
};

export default ContactForm;
