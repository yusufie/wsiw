"use client";
import React, { useEffect, useState } from "react";
import wanda from "@/assets/wanda.png";
import thor from "@/assets/thor.png";
import black from "@/assets/black.png";
import Image, { StaticImageData } from "next/image";
import MovieCard from "../components/MovieCard";

interface Movie {
	title: string;
	image: StaticImageData;
}

const SearchHistory = () => {
	const [search, setSearch] = useState("");

	const [filterHistory, setFilterHistory] = useState<Movie[] | never[]>();

	const items: Movie[] = [
		{ title: "Scarlet Witch", image: wanda },
		{ title: "Thor", image: thor },
		{ title: "Therr", image: thor },
		{ title: "Thirr", image: thor },
		{ title: "Thyrr", image: thor },
		{ title: "Thurr", image: thor },
		{ title: "Black Panther", image: black },
	];

	useEffect(() => {
		if (!search) {
			setFilterHistory([]);
		} else {
			const filtered = items.filter((item) =>
				item.title.toLowerCase().startsWith(search.toLowerCase())
			);
			setFilterHistory(filtered);
		}
	}, [search]);

	return (
		<div className={`container mx-4 flex w-full flex-col gap-8 px-8 pt-0`}>
			<div className="flex w-full justify-start">
				<form className="flex items-center">
					<input
						type="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search History"
						className="rounded-md p-2 px-4 text-sm text-black focus:outline-none"
					/>
				</form>
			</div>
			<div className="flex w-full px-8">
				<ul className="grid w-full grid-cols-4 gap-8 px-8 py-8">
					{filterHistory?.map((item, index) => (
						<div key={index}>
							<MovieCard title={item.title}>
								<Image
									src={item.image}
									alt="movie"
									className="h-50 w-50 object-contain"
								/>
							</MovieCard>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SearchHistory;
