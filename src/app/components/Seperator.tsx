import React from "react";

interface Props {
	text: string;
	className?: string;
	children?: React.ReactNode;
}

const Seperator = (props: Props) => {
	return (
		<div className={`relative z-[2] ${props.className}`}>
			{/* center */}
			<div
				className="seperator absolute
						left-1/2 top-1/2 -z-[1] -translate-x-1/2 -translate-y-1/4
						transform
					"
			/>
			{props.children}
			<span className="transform bg-black px-2 font-bold text-gray-300">
				{props.text}
			</span>
		</div>
	);
};

export default Seperator;
