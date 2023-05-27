// react
import React, { useState } from 'react';

// styles

// packages

// components

// app
function App() {
	// states
	const [value, setValue] = useState('');

	// functions
	const fetchImage = () => {
		fetch(
			`https://api.unsplash.com/search/photos/?client_id=8LEuoBlAwlNTFHJRykgpwLkZSA_Tg8X2LMzO2-vRdeI&query=${value}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	// 8LEuoBlAwlNTFHJRykgpwLkZSA_Tg8X2LMzO2-vRdeI

	// jsx
	return (
		<div>
			<div className='header'>
				<span>Search</span>
				<input
					type='text'
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<button onClick={fetchImage}>Send</button>
			</div>
			<div className='gallery'>
				<img
					src=''
					alt='image'
				/>
			</div>
		</div>
	);
}

// exports
export default App;
