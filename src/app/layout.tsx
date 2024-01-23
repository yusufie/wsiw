import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/providers";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "What should I watch",
	description: "Find a movie to watch based on your mood",
	// url: 'https://whatshouldiwatch.vercel.app/',
	// image: 'https://whatshouldiwatch.vercel.app/og.png',
	// twitter: '@whatshouldiwatch',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`relative bg-black ${inter.className}`}>
			{process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
