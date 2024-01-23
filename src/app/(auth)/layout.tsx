import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";

import Footer from "../components/Footer";
import Poster from "../components/Poster";
import Header from "../components/Header";

export const metadata = {
	title: "What should I watch",
	description: "Find a movie to watch based on your mood",
	// url: 'https://whatshouldiwatch.vercel.app/',
	// image: 'https://whatshouldiwatch.vercel.app/og.png',
	// twitter: '@whatshouldiwatch',
};

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	if (session) {
		redirect("/app");
	}

	return (
		<section className="app-layout ">
			<div className="w-full bg-black md:bg-transparent ">
				<Header />
			</div>

			<Poster />
			<main>
				<section className="hero-height relative h-full w-full">
					<div className="box-with-border mx-auto h-full text-center md:h-max md:w-max">
						<div className="mx-auto flex w-max flex-col items-center justify-center p-8">
							<div className="max-w-[30ch] self-start">{children}</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</section>
	);
}
