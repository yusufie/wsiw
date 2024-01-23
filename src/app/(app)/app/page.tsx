"use client";
import React, { useState } from "react";
import MessageInputBox from "./components/MessageInputBox";
import Carousel from "./components/Carousel";
import Image from "next/image";
import loadingImg from "@/assets/loading2.gif";

const page = () => {
	const [data, setData] = useState(false);
	const [loading, setLoading] = useState(false);
	const [clicked, setClicked] = useState(false);

	return (
		<div
			className={`container mx-auto flex flex-col items-center justify-between gap-8 overflow-hidden p-8 pt-0 `}
		>
			{loading && (
				<div className="h-full">
					<Image
						src={loadingImg}
						alt="loading"
					/>
				</div>
			)}

			<div className={`${data ? "hidden" : "invisible h-0 w-0"}`}></div>
			{data && <Carousel />}
			<form
				className={`flex  w-full flex-col items-center justify-center  transition-all ${
					!clicked && "flex-1"
				}`}
				onSubmit={(e) => {
					e.preventDefault();
					setClicked(true);
					setTimeout(() => {
						setLoading(true);
						setTimeout(() => {
							setData(true);
							setLoading(false);
						}, 2000);
					}, 250);
				}}
			>
				<MessageInputBox />
			</form>
		</div>
	);
};

export default page;
