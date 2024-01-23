import React from "react";
import Image from "next/image";
import poster from "@/assets/poster.jpg";

const Poster = () => (
	<div className="stack poster-height absolute left-0 top-0 -z-20 overflow-y-hidden">
		<Image
			src={poster}
			alt="poster"
			priority
			className="h-full object-none object-right blur-[2px]  "
		/>
		<div className="relative h-full w-full bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
	</div>
);

export default Poster;
