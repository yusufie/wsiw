"use client";
import Image from "next/image";
import NotFoundGif from "@/assets/error.gif";
import Link from "next/link";
import { FC } from "react";

const Error: FC = () => {
	return (
		<div className="container mx-auto flex flex-col items-center justify-center bg-black text-white lg:flex-row">
			<div className="flex flex-col items-center px-4 lg:w-1/2 lg:px-0">
				<h1 className="mb-6 text-center font-serif text-5xl font-extrabold text-pink-700 lg:mb-16 lg:text-8xl">
					Oops!
				</h1>
				<h1 className="mb-3 text-center font-mono text-base lg:mb-6 lg:text-xl">
					We are aware of the error you received, we are currently working on
					it.
				</h1>

				<Link href={"/app"}>
					<div className="relative z-50 cursor-pointer select-none p-2 text-white lg:ml-2 lg:[&>*:nth-child(4)]:hover:skew-y-3">
						<span className="absolute hidden sm:inline">GO BACK</span>
						<div className="ml-3 mr-2 mt-3 hidden text-lg sm:block lg:mt-5 lg:text-3xl">
							HOME
						</div>
						<div className="text-xl font-bold sm:hidden lg:text-4xl">Home</div>
						<span className="absolute left-0 top-0 -z-10 h-full w-full -skew-y-3 bg-pink-700 transition-transform"></span>
					</div>
				</Link>
			</div>
			<div className="flex items-center justify-center px-4 lg:w-1/2 lg:px-0">
				<Image
					priority={true}
					src={NotFoundGif}
					alt="Error"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
};

export default Error;
