import Poster from "../../components/Poster";
import GetStarted from "./GetStarted";
const Hero = () => {
	return (
		<section className="hero-height stack w-full">
			<Poster />
			<div className="hero-padding container mx-auto flex h-full flex-col items-center justify-center p-4 text-center ">
				<h1 className="text-3xl font-bold leading-7 tracking-wide text-white md:text-5xl">
					Find Your Perfect{" "}
					<span className="text-pink-600 drop-shadow-[0_15px_5px_rgba(219,39,119,1)]">
						Movie
					</span>{" "}
					Match
				</h1>
				<p className="mb-4 mt-4 text-base font-medium leading-7 tracking-wide text-white md:text-lg xl:w-[50%]">
					Unlock a world of movies tailored to your moods and preferences.
					<span className="mt-4 block"></span>
					Discover personalized recommendations from popular platforms like
					Netflix, Disney+, AppleTV, and more.{" "}
					<span className=" font-extrabold text-pink-500">
						Sign up for free
					</span>{" "}
					and let us guide you to your next cinematic adventure.
				</p>
				<GetStarted />
			</div>
		</section>
	);
};

export default Hero;
