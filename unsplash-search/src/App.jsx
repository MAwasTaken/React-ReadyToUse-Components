// react
import React, { useState } from "react";

// styles

// packages

// components

// app
function App() {
	// states
	const [value, setValue] = useState("");

	// jsx
	return (
		<div>
			<div className='header'>
				<span>جستجو</span>
				<input type='text' value={value} onChange={(event) => setValue(event.target.value)} />
				<button>Send</button>
			</div>
			<div className='gallery'>
				<img src='' alt='image' />
			</div>
		</div>
	);
}

// exports
export default App;
