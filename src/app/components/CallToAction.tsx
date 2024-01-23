import Link from "next/link";
const CallToAction = ({
	text,
	children,
	className,
	disabled,
}: {
	text: string;
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}) => {
	return (
		<button
			disabled={disabled}
			aria-disabled={disabled}
			className={`${className} max-h-min max-w-max cursor-pointer border
			border-pink-700 bg-pink-700 px-4 py-2 font-semibold text-white
			transition-colors hover:border hover:bg-black hover:shadow-lg hover:shadow-pink-700 `}
		>
			{text}
			{children}
		</button>
	);
};

export default CallToAction;
