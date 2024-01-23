import { NextResponse } from "next/server";

import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

import { getMovieRecommendations } from "@/services/ai/openai";

import * as Errors from "@/utils/errors/responseErrors";

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);

	if (!session) {
		return Errors.NotAuthorizedError;
	}

	// TODO: Get profile data from database and format it as text
	let { userPrompt } = (await req.json()) as {
		userPrompt: string;
	};
	userPrompt = userPrompt?.trim();
	if (!userPrompt) {
		return Errors.BadRequestError("Missing user prompt");
	}

	let movies = null;
	try {
		movies = await getMovieRecommendations(userPrompt, "");
	} catch (e) {
		console.log(e);
		return Errors.InternalServerError;
	}

	return NextResponse.json(movies);
}
