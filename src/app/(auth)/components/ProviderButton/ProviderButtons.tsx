"use client";
import React from "react";

import { signIn } from "next-auth/react";

import { socialButtonsData } from "./socialButtonsData";
import ProviderButton from "./ProviderButton";
import MailButton from "./MailButton";

const ProviderButtons = () => {
	const handleSignIn = async (providerId: string) => {
	  await signIn(providerId);
	};

	return (
		<div className="flex w-full flex-col gap-4">
			{socialButtonsData.map((button) => (
				<ProviderButton
					key={button.id}
					title={button.title}
					onClick={() => handleSignIn(button.id)}
					>
					{<button.icon className={button.color} focusable="false" size={32} role="img" />}
				</ProviderButton>
			))}
			<MailButton link="/login/email" />
		</div>
	);
};

export default ProviderButtons;
