import Link from "next/link";

const Logo = () => {
	return (
		<Link href={"/"}>
			<div className="relative z-50 cursor-pointer select-none p-2 text-white [&>*:nth-child(4)]:hover:skew-y-3">
				<span className="absolute hidden  sm:inline">what should I</span>
				<div className="ml-3 mt-4 hidden text-3xl font-bold sm:block">
					watch?
				</div>
				<div className="text-4xl font-bold sm:hidden">?</div>
				<span className="absolute left-0 top-0 -z-10 h-full w-full -skew-y-3  bg-pink-700 transition-transform"></span>
			</div>
		</Link>
	);
};

export default Logo;
