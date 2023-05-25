// react
import React, { useState } from "react";

// styles

// packages

// components

// ScrollIndicator
function ScrollIndicator() {
	// functions
	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

		const scrolled = (winScroll / height) * 100;

		setScrollTop(scrolled);
	};

	// states
	const [scrollTop, setScrollTop] = useState(0);

	// side effects
	useState(() => {
		window.addEventListener("scroll", onScroll);
	}, []);

	// jsx
	return (
		<div className='wrapper'>
			<div className='progressbar'>
				<div className='progressbarMain' style={{ width: `${scrollTop}%` }}></div>
			</div>
		</div>
	);
}

// exports
export default ScrollIndicator;
