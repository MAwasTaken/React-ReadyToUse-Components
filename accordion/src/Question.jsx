// react
import React, { useState } from "react";

// packages
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// styles

// components

// question
function Question({ title, info }) {
	// states
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div className='question'>
			<header>
				<h4>{title}</h4>
				<button onClick={() => setShowInfo((prevState) => !prevState)}>{!showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
			</header>
			{showInfo && <p>{info}</p>}
		</div>
	);
}

// exports
export default Question;
