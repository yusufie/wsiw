import React, { ElementType } from "react";

export interface TextBoxProps {
	placeholder: string;
	boxType: React.HTMLInputTypeAttribute;
	identifier: string;
	minLength?: number;
	maxLength?: number;
	required?: boolean;
	errorMessage?: string;
	Icon?: ElementType;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
}

const TextBox: React.FC<TextBoxProps> = (props) => {
	return (
		<div
			className={`${props.className} text-box relative cursor-text bg-white focus-within:outline-none focus-within:ring-2
                    focus-within:ring-pink-700 sm:mb-0`}
		>
			<input
				id={props.identifier}
				name={props.identifier}
				type={props.boxType}
				className="peer mt-2 flex-1 border border-none
                    bg-transparent
                    px-4
                    py-2
                    tracking-wide
                    text-black
                    placeholder-transparent
                    outline-none
                    "
				placeholder={props.placeholder}
				required={props.required}
				minLength={props.minLength}
				maxLength={props.maxLength}
				autoComplete={
					props.boxType === "email"
						? "email"
						: props.boxType === "password"
						? "current-password"
						: "off"
				}
				disabled={props.disabled}
				aria-disabled={props.disabled}
			/>
			<label
				htmlFor={props.identifier}
				className="absolute left-3
                    top-1 text-xs font-medium text-pink-700 transition-all

                     peer-placeholder-shown:left-4
                     peer-placeholder-shown:top-3
                     peer-placeholder-shown:text-base
                     peer-placeholder-shown:text-slate-500

                     peer-focus-within:left-3
                    peer-focus-within:top-1
                    peer-focus-within:text-xs
                    peer-focus-within:font-medium
                    peer-focus-within:text-pink-700
                     "
			>
				{props.placeholder}
			</label>
			{props.errorMessage && (
				<p className="invisible absolute flex items-center text-start text-sm text-red-500">
					{props.Icon && (
						<props.Icon
							className="my-2 mr-1  inline-block"
							size={16}
						/>
					)}
					{props.errorMessage}
				</p>
			)}
			{props.children}
		</div>
	);
};

export default TextBox;
