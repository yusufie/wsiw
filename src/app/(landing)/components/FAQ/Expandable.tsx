"use client";
import React, { FC, useState } from "react";

interface ExpandableProps {
	question: string;
	answer: string;
}

const Expandable: FC<ExpandableProps> = ({ question, answer }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className={`my-6 border-b-2 border-white/40 px-2 text-left text-base leading-6 tracking-wide md:text-lg hover:[&_button]:text-pink-700 ${
				isExpanded && "[&_button]:text-pink-600"
			}`}
		>
			<button
				onClick={toggleExpand}
				className="w-full cursor-pointer text-start text-xl font-bold focus:outline-none"
			>
				{question}
			</button>
			<div
				className={`my-2 grid cursor-pointer grid-rows-[0fr] overflow-hidden text-base leading-6 tracking-wide transition-all md:text-lg ${
					isExpanded && "grid-rows-[1fr]"
				}`}
			>
				<div
					onClick={toggleExpand}
					className="min-h-0 py-0"
				>
					{answer}
				</div>
			</div>
		</div>
	);
};

export default Expandable;
