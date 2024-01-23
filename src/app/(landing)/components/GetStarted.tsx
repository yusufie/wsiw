import React from "react";
import Link from "next/link";
import CallToAction from "@/app/components/CallToAction";
import { AiOutlineRight } from "react-icons/ai";

const GetStarted = () => {
	return (
		<Link
			href="/login"
			prefetch
			className="mt-4 flex w-full justify-center"
		>
			<CallToAction
				text="Get Started"
				className="mx-auto text-lg"
			>
				<AiOutlineRight
					className="ml-2 inline-block"
					size={18}
				/>
			</CallToAction>
		</Link>
	);
};

export default GetStarted;
