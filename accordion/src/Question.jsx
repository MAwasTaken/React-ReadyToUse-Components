// react
import React, { useState } from "react";

// packages
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// styles

// components

// question
function Question() {
	// states
	const [showInfo, setShowInfo] = useState(false);
  
	return (
		<div className='question'>
			<header>
				<h4>This is the 1st question</h4>
				<button onClick={() => setShowInfo((prevState) => !prevState)}>
					<AiOutlinePlus />
				</button>
			</header>
			{showInfo && <p>this is content</p>}
		</div>
	);
}

// exports
export default Question;
