import React from "react";

interface CheckboxProps {
	text: string;
	identifier: string;
	required?: boolean;
	className?: string;
	disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
	return (
		<div
			className={`${props.className} flex w-full items-center justify-start
         text-gray-200 hover:text-gray-400`}
		>
			<input
				type="checkbox"
				name={props.identifier}
				id={props.identifier}
				className="mr-2 accent-pink-700"
				required={props.required}
				disabled={props.disabled}
				aria-disabled={props.disabled}
			/>
			<label
				htmlFor={props.identifier}
				className="text-sm font-medium tracking-wide"
			>
				{props.text}
			</label>
		</div>
	);
};

export default Checkbox;
