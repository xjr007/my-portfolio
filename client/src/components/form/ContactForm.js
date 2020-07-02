import React from 'react';
import '../../App.css';

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
		<div className='row form-handle'>
			<h3 className='cntc'>Contact me</h3>
			<form
				className='col s12'
				style={{
					width: '700px',
					height: '400px',
					position: 'absolute',
					transform: 'translate(40%, 40%)',
					border: '5px solid var(--grey-colour)',
				}}>
				<div className='row' style={{ transform: 'translate(10%, 20%)' }}>
					<div className='input-field col s6'>
						<input
							placeholder='name'
							type='text'
							className='validate'
							style={somestyle}
						/>
					</div>
					<div className='input-field col s6'>
						<input
							placeholder='email'
							type='text'
							className='validate'
							style={somestyle}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s10' style={msgstyle}>
						<input type='text' placeholder='message' className='validate' />
					</div>
				</div>
				<div>
					<input
						type='submit'
						className='btn btn-primary btn-block'
						style={{ backgroundColor: 'grey', transform: 'translate(340%, 500%)' }}
					/>
				</div>
			</form>
		</div>
	);
};
const somestyle = {
	width: '200px',
};
const msgstyle = {
	width: '450px',
	height: '200px',
	position: 'absolute',
	transform: 'translate(25%, 30%)',
};

export default ContactForm;
