import Link from "next/link";
import React from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
interface MovieCardProps {
	title: string;
	className?: string;
	children?: React.ReactNode;
}

// TODO: Use prefecth to Load Movie Details on Click

const MovieCard: React.FC<MovieCardProps> = (props) => {
	return (
		<Link href={"/app/modal"}>
		<div className={`${props.className} stack relative`}>
			{props.children}
			<div className="bg-gradient-black-bottom gradient-border relative flex h-full w-full flex-col justify-end p-4">
				<h2 className="text-xl font-semibold leading-5 tracking-wide text-white">
					{props.title} <span className="text-sm text-pink-700">%96 match</span>
				</h2>
				<div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-white/70 [&>:nth-child(even)]:text-pink-700">
					<span>2021</span>
					<span>·</span>
					<span>Sitcom</span>
					<span>·</span>
					<span>7.9/10</span>
					<span>·</span>
					<span>1 season</span>
				</div>
				<div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold">
					<button className="text-green-500">
						<AiTwotoneLike />
					</button>
					<button className="text-red-500">
						<AiTwotoneDislike />
					</button>
				</div>
			</div>
		</div>
		</Link>
	);
};

export default MovieCard;
