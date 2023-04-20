// react
import React, { useState } from "react";

// packages
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

// styles

// components

// app
function App() {
	// states
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);

	// functions
	const clickHandeler = () => {
		if (type === "password") {
			setType("text");
			setIcon(eye);
		} else {
			setType("password");
			setIcon(eyeOff);
		}
	};

	return (
		<div className='wrapper'>
			<div className='input-field'>
				<input type={type} />
				<span onClick={clickHandeler}>
					<Icon icon={icon} size={25} />
				</span>
			</div>
		</div>
	);
}

// exports
export default App;
