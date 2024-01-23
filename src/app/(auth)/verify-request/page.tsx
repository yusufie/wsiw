import GoBack from "@/app/components/GoBack";
import React from "react";

const page = () => {
	return (
		<div className="text-start text-lg text-gray-300">
			<h1 className="mb-4 text-xl text-center font-bold text-white ">Check your email.</h1>
			<p>A sign in link has been sent to your email address.</p>
			{/* <p className="mt-2 text-base text-gray-400">You can close this tab. </p> */}
			<GoBack link="/" />
			<p className="mt-10 text-xs text-gray-400">
				If you don't see the email, check other places it might be, like your
				junk, spam, social, or other folders.
			</p>
		</div>
	);
};

export default page;
