// react
import React from "react";

// packages

// styles

// components

// app
function App() {
	return (
		<div className='section-center'>
      <h4>Lorem Ipsum Generator</h4>
      <form className="lorem">
        <label htmlFor="total">paragraph count: </label>
        <input type="number" />
        <button type="submit">Generate!</button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem cumque temporibus vero laboriosam quia necessitatibus reiciendis quos, incidunt dolore architecto, numquam vel odit nihil dicta accusamus ea! Ut, deleniti.</p>
      </article>
		</div>
	);
}

// exports
export default App;
