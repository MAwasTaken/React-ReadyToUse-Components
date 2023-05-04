// packages
import { FaTwitter, FaFacebook, FaLinkedin, FaBehance } from "react-icons/fa";

// data
const links = [
	{
		id: 1,
		url: "/",
		text: "Home",
	},
	{
		id: 2,
		url: "/",
		text: "About us",
	},
	{
		id: 3,
		url: "/",
		text: "Contact us",
	},
	{
		id: 4,
		url: "/",
		text: "Projects",
	},
];

const socials = [
	{
		id: 1,
		url: "htts://twitter.com",
		icon: <FaTwitter />,
	},
	{
		id: 2,
		url: "htts://facebook.com",
		icon: <FaFacebook />,
	},
	{
		id: 3,
		url: "htts://linkdin.com",
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: "htts://behance.com",
		icon: <FaBehance />,
	},
];

// exports
export { links, socials };
