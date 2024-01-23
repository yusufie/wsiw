import React from "react";

import ErrorInfo from "../components/ErrorInfo";

import ProviderButtons from "../components/ProviderButton/ProviderButtons";
import Seperator from "@/app/components/Seperator";

export const metadata = {
	title: "Login - What should I watch",
	description:
		"Login to discover personalized movie recommendations based on your mood. Start your cinematic journey with What should I watch.",
	// url: 'https://yourwebsite.com/signin',
	// image: 'https://yourwebsite.com/og.png',
	// twitter: '@yourtwitterhandle',
};

interface Props {
	searchParams: { [key: string]: string | string[] | undefined };
}

const page = (props: Props) => {
	const { error } = props.searchParams;

	return (
		<>
			<h1 className="mb-4 text-start text-3xl font-bold text-white ">Login</h1>
			{error ? <ErrorInfo errorText={error} /> : null}
			<p className="text-start text-lg text-gray-300">
				Join the limitless world of movies and TV shows.
			</p>
			<Seperator
				text="Login with"
				className="my-4"
			/>
			<ProviderButtons />
		</>
	);
};

export default page;
