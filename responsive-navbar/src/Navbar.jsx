// react
import React from "react";

// packages
import { FaBars } from "react-icons/fa";

// styles

// components
import { links, socials } from "./data";

// navbar
function Navbar() {
	return (
		<nav>
			<div className='container'>
				<div className='nav-logo'>
					<button className='nav-toggle'>
						<FaBars />
					</button>
					<span>MAwasTaken</span>
				</div>
				<div className='nav-links'>
					<ul className='list'>
						{links.map((link) => (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>
				<div className='nav-social'>
          {socials.map(social => (
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
