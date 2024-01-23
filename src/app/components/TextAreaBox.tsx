"use client";
import React, { useEffect } from "react";
export interface TextAreaBoxProps {
	placeholder: string;
	identifier: string;
	onChange: (text: string) => void;
	minLength?: number;
	maxLength?: number;
	required?: boolean;
	className?: string;
	value?: string;
}

const TextAreaBox: React.FC<TextAreaBoxProps> = (props) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const h = "56px";

		const textarea = event.currentTarget;

		textarea.style.height = h;
		textarea.style.height = `${textarea.scrollHeight}px`;
	};

	useEffect(() => {
		handleInputChange({
			currentTarget: document.querySelector(
				`#${props.identifier}`
			) as HTMLTextAreaElement,
		} as React.ChangeEvent<HTMLTextAreaElement>);
	}, [props.value]);

	return (
		<div className={`${props.className} `}>
			<textarea
				placeholder={props.placeholder}
				id={props.identifier}
				name={props.identifier}
				minLength={props.minLength}
				maxLength={props.maxLength}
				required={props.required}
				onChange={(event) => {
					props.onChange(event.currentTarget.value);
					handleInputChange(event);
				}}
				value={props.value && props.value}
				className={`${props.className} text-area-box
				h-14 max-h-80 resize-none bg-white p-4
				text-base tracking-wide text-black
				outline-none
				placeholder:text-slate-500 focus-within:outline-none `}
			/>
		</div>
	);
};

export default TextAreaBox;

// onKeyDown={submitOnEnter}

// function submitOnEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
// 	if (event.key === "Enter" && !event.shiftKey) {
// 		event.preventDefault();
// 		event.currentTarget.form?.dispatchEvent(
// 			new Event("submit", { cancelable: true })
// 		);
// 	} else if (event.key === "Enter" && event.shiftKey) {
// 		event.preventDefault();
// 		event.currentTarget.value += "\n";
// 	}
// }

// useEffect(() => {
// 	if (!window || !document) return;

// 	const textarea = document.querySelector(
// 		`#${props.identifier}`
// 	) as HTMLTextAreaElement;

// 	if (!textarea) return;

// 	const h = "56px";
// 	if (textarea.value === "") {
// 		textarea.value = textarea.placeholder;
// 		textarea.style.height = h;
// 		textarea.style.height = `${textarea.scrollHeight}px`;
// 		textarea.value = "";
// 	}
// }, [props.placeholder]);

// useEffect(() => {
// 	console.log("useEffect");
// 	handleInputChange({
// 		currentTarget: document.querySelector(
// 			`#${props.identifier}`
// 		) as HTMLTextAreaElement,
// 	} as React.ChangeEvent<HTMLTextAreaElement>);
// }, [props.value]);
