// react
import React from "react";

// packages
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// styles

// components

// question
function Question() {
	return (
		<div className='question'>
			<header>
				<h4>This is the 1st question</h4>
				<button>
					<AiOutlinePlus />
				</button>
			</header>
      <p>this is content</p>
		</div>
	);
}

// exports
export default Question;
