// react
import React, { useState } from "react";

// packages
import { FaBars, FaTimes } from "react-icons/fa";

// styles

// components
import { links, socials } from "./data";

// navbar
function Navbar() {
	// states
	const [showLinks, setShowLinks] = useState(false);

	// jsx
	return (
		<nav>
			<div className='container'>
				<div className='nav-logo'>
					<button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
						{showLinks ? <FaTimes /> : <FaBars />}
					</button>
					<span>MAwasTaken</span>
				</div>
				<div className={showLinks ? "nav-links active" : "nav-links"}>
					<ul className='list'>
						{links.map((link) => (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='nav-social'>
					{socials.map((social) => (
						<li key={social.id}>
							<a href={social.url}>{social.icon}</a>
						</li>
					))}
				</div>
			</div>
		</nav>
	);
}

// exports
export default Navbar;
