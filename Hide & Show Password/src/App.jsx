import React from "react";
import {FaEye} from 'react-icons/fa';

function App() {
	return (
		<div className='wrapper'>
			<div className='input-field'>
				<input type='password' />
				<span>
					<FaEye />
				</span>
			</div>
		</div>
	);
}

export default App;
