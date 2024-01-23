"use client";
import React, { useState } from "react";

import { signIn } from "next-auth/react";

import TextBox from "@/app/components/TextBox";
import CallToAction from "@/app/components/CallToAction";

import { VscError } from "react-icons/vsc";

const EmailForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		const email = new FormData(e.currentTarget).get("email") as string;

		signIn("email", { email, callbackUrl: "/app" });
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="mt-4"
		>
			<TextBox
				boxType="email"
				identifier="email"
				placeholder="Email"
				errorMessage="Invalid email address"
				Icon={VscError}
				required
				disabled={isLoading}
			/>
			<CallToAction
				text="Enter the world of movies"
				className="mt-8 w-full max-w-full"
				disabled={isLoading}
			/>
		</form>
	);
};

export default EmailForm;
