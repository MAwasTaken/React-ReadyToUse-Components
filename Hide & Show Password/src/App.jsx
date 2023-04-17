import React from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";

function App() {
	const clickHandeler = () => {};
  
	return (
		<div className='wrapper'>
			<div className='input-field'>
				<input type='password' />
				<span onClick={clickHandeler}>
					<Icon icon={eye} size={25} />
				</span>
			</div>
		</div>
	);
}

export default App;
