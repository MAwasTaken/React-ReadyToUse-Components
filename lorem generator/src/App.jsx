// react
import React, { useState } from "react";

// packages

// styles

// components
import data from "./data";

// app
function App() {
	// states
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	// functions
	const submitHandeler = (event) => {
		event.preventDefault();

		let amount = parseInt(count);

		if (count <= 0) amount = 1;
		else if (count > 4) amount = 4;
    
		setText(data.slice(0, amount));
	};

	return (
		<div className='section-center'>
			<h4>Lorem Ipsum Generator</h4>
			<form className='lorem' onSubmit={submitHandeler}>
				<label htmlFor='total'>paragraph count: </label>
				<input type='number' name='total' value={count} onChange={(event) => setCount(event.target.value)} />
				<button type='submit'>Generate!</button>
			</form>
			<article className='lorem-text'>
				{text.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</article>
		</div>
	);
}

// exports
export default App;
