import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ data }) => {
	const { title, info } = data;
	const [ toggleButton, setToggleButton ] = React.useState(false);
	// console.log(data);
	return (
		<section className="section-item">
			<div className="section-button">
				<h3>{title}</h3>
				<button className="toggle-btn" onClick={() => setToggleButton(!toggleButton)}>
					{toggleButton ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			<div className="info">{toggleButton && <h4>{info}</h4>}</div>
		</section>
	);
};

export default Question;
