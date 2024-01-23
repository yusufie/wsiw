import React from "react";

interface Props {
	title: string;
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
}

const ProviderButton = (props: Props) => {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className={`
							flex
                             items-center justify-center gap-2
                             rounded-md border
                             border-yellow-700
                             bg-black p-2
                             transition-all duration-200
                             hover:ring-2 hover:ring-yellow-700/90
                             focus:outline-none focus:ring-2 focus:ring-yellow-700/90
                             ${props.className}`}
		>
			{props.children}
			<span className="text-base font-semibold  text-white">{props.title}</span>
		</button>
	);
};

export default ProviderButton;
