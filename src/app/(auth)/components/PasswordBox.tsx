"use client";
import React, { useState } from "react";
import TextBox from "../../components/TextBox";
import { VscError } from "react-icons/vsc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { PASS_MIN_LENGTH } from "@/utils/validator";

interface PasswordBoxProps {
	disabled?: boolean;
	className?: string;
}

const PasswordBox = ({ disabled, className }: PasswordBoxProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const switchPasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className={`relative ${className}`}>
			<TextBox
				boxType={showPassword ? "text" : "password"}
				placeholder="Password"
				errorMessage={`Password must be at least ${PASS_MIN_LENGTH} characters long.`}
				identifier={"password"}
				required
				minLength={PASS_MIN_LENGTH}
				maxLength={32}
				Icon={VscError}
				className="box-error"
				disabled={disabled}
			>
				<button
					className={`${
						showPassword
							? "text-pink-700 hover:text-black"
							: "text-black hover:text-pink-700"
					} absolute right-0 top-0 flex h-full w-12 cursor-pointer place-content-center place-items-center bg-white`}
					onClick={switchPasswordVisibility}
					type="button"
				>
					{showPassword ? (
						<AiFillEye size={22} />
					) : (
						<AiFillEyeInvisible size={22} />
					)}
				</button>
			</TextBox>
		</div>
	);
};

export default PasswordBox;
