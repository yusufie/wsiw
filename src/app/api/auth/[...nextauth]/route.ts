import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/lib/prisma";

import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import DiscordProvider from "next-auth/providers/discord";
import EmailProvider from "next-auth/providers/email";

import { sendVerificationRequest } from "@/utils/emailVerificationRequest";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		TwitterProvider({
			clientId: process.env.TWITTER_ID as string,
			clientSecret: process.env.TWITTER_SECRET as string,
			version: "2.0", // opt-in to Twitter OAuth 2.0
		  }),
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID as string,
			clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER_LINK as string,
			from: process.env.EMAIL_FROM as string,
			sendVerificationRequest,
		}),
	],
	pages: {
		// TODO: Create new user page
		signIn: "/login",
		error: "/login",
		verifyRequest: "/verify-request",
	},
	debug: false,
	session: {
		strategy: "database",
	},
	callbacks: {
		async session({ session, user }) {
			if (session.user) {
				session.user.id = user.id;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
