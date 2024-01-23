import React from "react";

import EmailForm from "./components/EmailForm";
import GoBack from "@/app/components/GoBack";

const page = () => {
	return (
		<>
			<h1 className="mb-4 text-start text-3xl font-bold text-white ">
				Email Login
			</h1>
			<p className="text-start text-lg text-gray-300">
				You don't need anything to start,{" "}
				<span className="font-medium italic text-pink-600 ">
					just an email.
				</span>
			</p>

			<EmailForm />
			<GoBack link="/login" />
		</>
	);
};

export default page;
