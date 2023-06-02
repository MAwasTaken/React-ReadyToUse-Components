// react
import React from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

// packages
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

// components

// app
function App() {
	const sendEmail = (event) => {
		event.preventDefault();

		emailjs.sendForm('service_6zoqzau', 'template_ih9ucir', event.target, 'M9MwPZK1IXvWJ9nw3').then(
			(result) => {
				if (result.status === 200)
					toast.success('Your Message Sent Successfully', {
						position: 'top-right',
						closeOnClick: true,
					});
			},
			(error) => console.log(error)
		);
	};
	// jsx
	return (
		<div className='container py-5'>
			<div className='row py-5 justify-content-center'>
				<div className='col-md-4 bg-white p-5 mt-5'>
					<h2 className='pb-5 text-center'>Send Message To Admin</h2>
					<form onSubmit={sendEmail}>
						<div className='form-group'>
							<input
								type='text'
								name='name'
								placeholder='Your Name: '
								className='form-control p-3'
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								name='email'
								placeholder='Your Email: '
								className='form-control p-3'
							/>
						</div>
						<div className='form-group'>
							<textarea
								name='message'
								placeholder='Your Message: '
								className='form-control p-3'
							/>
						</div>
						<div className='form-group'>
							<input
								value='Submit'
								type='submit'
								className='btn btn-success w-100 mt-5 p-2'
							/>
						</div>
					</form>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

// exports
export default App;
