"use client";
import React, { useState } from "react";

import Flicking from "@egjs/react-flicking";

import MovieCard from "./MovieCard";
import wanda from "@/assets/wanda.png";
import thor from "@/assets/thor.png";
import black from "@/assets/black.png";
import Image from "next/image";

const items = [
	<MovieCard title="Scarlet Witch">
		<Image
			src={wanda}
			alt="movie"
			className="object-contain"
		/>
	</MovieCard>,
	<MovieCard title="Thor">
		<Image
			src={thor}
			alt="movie"
			className="object-contain"
		/>
	</MovieCard>,
	<MovieCard title="Black Panther">
		<Image
			src={black}
			alt="movie"
			className="object-contain"
		/>
	</MovieCard>,
];

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => {
			if (prev === 0) return items.length - 1;
			return prev - 1;
		});
	};

	const handleNext = () => {
		setCurrentIndex((prev) => {
			if (prev === items.length - 1) return 0;
			return prev + 1;
		});
	};

	return (
		<div className="no-scrollbar relative h-full w-full overflow-x-auto">
			<Flicking
				cameraClass="flex w-[300%] h-full sm:w-[200%] md:mx-auto md:w-[100%] gap-2 md:justify-center "
				align={"prev"}
				circularFallback="bound"
				moveType="snap"
			>
				{items.map((item, index) => (
					<div
						key={index}
						className="max-[300]:w-[100%] max-w-[230px] sm:max-w-[300px] md:max-w-[350px]"
					>
						{item}
					</div>
				))}
			</Flicking>
		</div>
	);
};

export default Carousel;
