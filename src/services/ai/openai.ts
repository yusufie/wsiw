import OpenAI from "openai";
import { generatePrompt } from "@/utils/services/messageFormatter";

const openai = new OpenAI();

const getMovieRecommendations = async (
	userPrompt: string,
	profileText: string
) => {
	const prompt = generatePrompt(userPrompt, profileText);

	const completion = await openai.chat.completions.create({
		messages: prompt,
		model: "gpt-3.5-turbo",
	});
	return JSON.parse(completion.choices[0].message.content || "");
};

export { getMovieRecommendations };
