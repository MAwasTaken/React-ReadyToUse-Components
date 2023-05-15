// react
import React from "react";

// packages
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

// review
function Reviews() {
	return (
		<div className='reviews'>
			<div className='review-img'>
				<img src='' alt='' />
			</div>
			<h4 className='author'>MAwasTaken</h4>
			<p className='job'>graphist</p>
			<p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita nesciunt cum earum, mollitia numquam eius cumque. Unde assumenda magnam inventore quas? Fugit consequuntur itaque, nisi quae necessitatibus ab magni aperiam!</p>
			<div className='review-button'>
				<button>
					<FaChevronRight />
				</button>
				<button>
					<FaChevronLeft />
				</button>
			</div>
			<button className='random-btn'>Random</button>
		</div>
	);
}

export default Reviews;
