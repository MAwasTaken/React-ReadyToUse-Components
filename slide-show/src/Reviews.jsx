// react
import React, { useState } from "react";

// packages
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// styles

// components
import data from "../data";

// review
function Reviews() {
	// states
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = data[index];

	// functions
	const nextSlide = () => {
		setIndex((index) => {
			let newIndex = index + 1;

			return newIndex;
		});
	};

	const prevSlide = () => {
		setIndex((index) => {
			let newIndex = index - 1;

			return newIndex;
		});
	};

	return (
		<div className='reviews'>
			<div className='review-img'>
				<img src={image} alt='' />
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='review-button'>
				<button onClick={nextSlide}>
					<FaChevronRight />
				</button>
				<button onClick={prevSlide}>
					<FaChevronLeft />
				</button>
			</div>
			<button className='random-btn'>Random</button>
		</div>
	);
}

export default Reviews;
