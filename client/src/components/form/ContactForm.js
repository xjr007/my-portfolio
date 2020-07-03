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
				right: '10%',
				top: '15%',
				width: '500px',
				border: 'solid 5px grey',
				padding: '40px',
				overflow: 'hidden',
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
					<Form.Control placeholder='Name' />
				</FormGroup>
				<FormGroup as={Col} style={{ marginLeft: '0px', padding: '0' }}>
					<Form.Label>Email</Form.Label>
					<Form.Control placeholder='Email' />
				</FormGroup>
			</Row>
			<Row>
				<FormGroup>
					<Form.Label>Message</Form.Label>
					<FormControl
						as='textarea'
						placeholder='Message'
						style={{ left: '10px', width: '100%', height: '150px' }}
					/>
				</FormGroup>
			</Row>
		</Form>
	);
};

const formStyling = {
	position: 'fixed',
	left: '30%',
	top: '30%',
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	gridTemplateRows: 'repeat(2, 1fr)',
};

const nameStyle = {
	gridColumn: '1',
	gridRow: '1',
	paddingRight: '50px',
};
const emailStyle = {
	gridColumn: '2',
	gridRow: '1',
};
const messageStyle = {
	gridColumn: '1',
	gridRow: '2',
	width: '200%',
	paddingTop: '30px',
};

export default ContactForm;
