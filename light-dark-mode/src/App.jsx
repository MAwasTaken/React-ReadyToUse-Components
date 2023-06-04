// react
import React, { useState } from 'react';

// app
function App() {
	// states
	const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
	// jsx
	return (
		<div className='app'>
			<header className='header'>
				<div className='container'>
					<div className='nav'>
						<ul>
							<li>Home</li>
							<li>About us</li>
							<li>Contact us</li>
						</ul>
						<label className='switch'>
							<input
								type='text'
								onChange={() => setDarkMode(!darkMode)}
							/>
							<span className='slider round'></span>
						</label>
					</div>
				</div>
			</header>
			<div className='content'>
				<div className='container'>
					<h1>{darkMode ? 'Dark Mode Is On' : 'Light Mode Is On'}</h1>
					<p>This is Light Mode</p>
				</div>
				<div className='container'>
					<div className='card'>
						<div className='card-item'>
							<img
								src='/image/1.jpg'
								alt=''
							/>
							<h2>First Cart</h2>
							<p>this is first cart</p>
						</div>
						<div className='card-item'>
							<img
								src='/image/2.jpg'
								alt=''
							/>
							<h2>Second Cart</h2>
							<p>this is second cart</p>
						</div>
						<div className='card-item'>
							<img
								src='/image/3.jpg'
								alt=''
							/>
							<h2>Third Cart</h2>
							<p>this is third cart</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// exports
export default App;
