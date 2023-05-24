// react
import React from "react";

// styles

// packages

// components
import Content from "./Content";
import ScrollIndicator from "./ScrollIndicator";

// app
function App() {
	// jsx
	return (
		<>
			<header>
				<div className='container'>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Contact us</li>
						<li>Blog</li>
					</ul>
				</div>
			</header>
			<ScrollIndicator />
			<Content />
		</>
	);
}

// exports
export default App;
