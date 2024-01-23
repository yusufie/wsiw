import { redirect } from "next/navigation";

import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";

import FAQ from "./components/FAQ/FAQ";
import Hero from "./components/Hero";
import Section from "./components/Section";
import GetStarted from "./components/GetStarted";

export default async function Home() {
	const session = await getServerSession(authOptions);
	if (session) {
		redirect("/app");
	}
	return (
		<main>
			<Hero />
			<Section
				heading="Movies Mirroring Your Emotions"
				subheading='Embark on a cinematic adventure like no other. With "What Should I Watch?", simply share your mood or emotions, and unlock a curated selection of movies that match your state of mind. Register now and let us guide you to the perfect movie for every moment. Immerse yourself in a world of personalized movie recommendations today!'
				image="/fun.png"
				imageAlt="tv"
			/>
			<Section
				heading="Curated Movie Collections"
				subheading="Explore captivating movie collections handpicked to ignite your imagination. From heartwarming favorites to adrenaline-pumping thrills, our curated collections offer a variety of cinematic experiences. Dive into our carefully crafted movie selections and uncover hidden gems that will leave you spellbound."
				image="/collections.png"
				imageAlt="collections"
				reverse
			/>
			<Section
				heading="Calendar and Watchlist Features"
				subheading="Take control of your movie-watching journey with our convenient calendar and watchlist features. Plan your movie nights in advance by marking your preferred dates on the calendar. Save intriguing movie recommendations to your watchlist for future enjoyment. Stay organized and never miss a movie that captures your curiosity."
				image="/calendar.png"
				imageAlt="calendar"
			/>
			<Section
				heading="Direct Streaming Links"
				subheading="Seamlessly transition from discovery to watching with our direct streaming links. Access your recommended movies with a single click and enjoy them on popular platforms like Netflix, Disney+, AppleTV, Prime Video, HBOMax, and Hulu. Immerse yourself in a world of cinematic wonder with ease and convenience."
				image="/Designer.png"
				imageAlt="streaming"
				reverse
			/>
			<FAQ />

			<div className="w-full border-t-4 border-slate-800">
				<div className="mx-auto max-w-screen-lg   p-4 py-8">
					<p className="text-center text-xl font-semibold  leading-7 tracking-wide text-pink-600 md:text-2xl">
						Ready to discover hidden gems that you've never heard of before?
					</p>
					<GetStarted />
				</div>
			</div>
		</main>
	);
}
