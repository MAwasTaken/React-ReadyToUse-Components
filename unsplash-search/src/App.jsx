// react
import React, { useState } from 'react';

// styles

// packages

// components

// app
function App() {
	// states
	const [value, setValue] = useState('');
	const [result, setResult] = useState('');

	// functions
	const fetchImage = () => {
		fetch(
			`https://api.unsplash.com/search/photos/?client_id=8LEuoBlAwlNTFHJRykgpwLkZSA_Tg8X2LMzO2-vRdeI&query=${value}`
		)
			.then((res) => res.json())
			.then((data) => setResult(data.results));
	};

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
				{result &&
					result.map((item) => (
						<img
							key={item.id}
							src={item.urls.regular}
							alt='image'
						/>
					))}
			</div>
		</div>
	);
}

// exports
export default App;
