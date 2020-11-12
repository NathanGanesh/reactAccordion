import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
	return (
		<div className="question-box">
			<div className="question-title">
				<h2>Questions And Answers About Login</h2>
			</div>
			<div className="question-item">
				{data.map((item) => {
					return <SingleQuestion data={item} key={item.id} />;
				})}
			</div>
		</div>
	);
}

export default App;
