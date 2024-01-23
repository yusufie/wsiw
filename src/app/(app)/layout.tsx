import { redirect } from "next/navigation";

import Footer from "../components/Footer";
import Header from "./components/Header";

import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";

import { wsiError } from "@/utils/errors";

export const metadata = {
	title: "App | What should I watch",
	description: "Find a movie to watch based on your mood",
	// url: 'https://whatshouldiwatch.vercel.app/',
	// image: 'https://whatshouldiwatch.vercel.app/og.png',
	// twitter: '@whatshouldiwatch',
};

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect(`/login?error=${wsiError.SessionRequired}`);
	}
	return (
		<div className="app-layout text-white">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
