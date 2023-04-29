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

		console.log(count);
		setText(data);
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
