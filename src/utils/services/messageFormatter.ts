import { OpenAI } from "openai";

const generatePrompt = (
	userPrompt: string,
	profileText: string
): OpenAI.Chat.Completions.ChatCompletionMessageParam[] => {
	const prompt = `You are an helper bot, that helps people to find best movie for them. So user says you whatever he/she wants, and you will answer them with json 3 movie; each movie has this format in array: {'movieName': 'Blade Runner', 'year':  1982, 'why': '$[why you recommended]} and try to recommend newer movies. ${
		profileText && " here some info about him/her: " + profileText
	}`;

	return [
		{
			role: "system",
			content: prompt,
		},
		{
			role: "user",
			content: userPrompt,
		},
	];
};

export { generatePrompt };
