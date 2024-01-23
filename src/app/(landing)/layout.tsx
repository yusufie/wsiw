import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Link from "next/link";

import Hamburger from "../(app)/components/Hamburger";
import Menu from "../(app)/components/Menu/Menu";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const metadata = {
	title: "What should I watch",
	description: "Find a movie to watch based on your mood",
	// url: 'https://whatshouldiwatch.vercel.app/',
	// image: 'https://whatshouldiwatch.vercel.app/og.png',
	// twitter: '@whatshouldiwatch',
};

export default async function LandingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	
	return (
		<section className="app-layout">
			<Header>
				{session ? (
					<>
						<div className="xl:hidden">
							<Hamburger />
						</div>
						<div className="hidden xl:block">
							<Menu />
						</div>
					</>
				) : (
					<Link href={"/login"}>
						<CallToAction text="Login" />
					</Link> )
				}
			</Header>
			{children}
			<Footer />
		</section>
	);
}
