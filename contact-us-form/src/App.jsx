// react
import React from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// packages

// components

// app
function App() {
	// jsx
	return (
		<div className='container py-5'>
			<div className='row py-5 justify-content-center'>
				<div className='col-md-4 bg-white p-5 mt-5'>
					<h2 className='pb-5 text-center'>Send Message To Admin</h2>
					<form>
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
		</div>
	);
}

// exports
export default App;
