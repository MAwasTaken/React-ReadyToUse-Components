// react
import React, { useState } from "react";

// packages

// styles

// components
import Question from "./Question";
import data from "./data";

// app
function App() {
	// states
	const [questions, setQuestions] = useState(data);

	return (
		<div className='container'>
			<h3>Have a question ?</h3>
			<div className='info'>
				{questions.map((question) => (
					<Question {...question} key={question.id} />
				))}
			</div>
		</div>
	);
}

// exports
export default App;
