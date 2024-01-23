"use client";
import React, { useState } from "react";
import TextAreaBox from "@/app/components/TextAreaBox";
import useRandomText from "@/hooks/useRandomText";
import { SlMagicWand } from "react-icons/sl";
import { BsFillSendFill } from "react-icons/bs";

const QUESTIONS = [
	"Movie mood today?",
	"What's your movie mood?",
	"Looking for something specific?",
	"Enter a movie you love.",
	"What's your favorite movie?",
	"Enter a movie keyword.",
	"What kind of movie?",
	"Tell us your favorite movie.",
	"Enter a movie keyword.",
	"Looking for something new?",
	"Tell us what you're craving.",
	"Enter a movie you hate.",
	"Favorite movie genre?",
	"Enter a movie title or keyword.",
	"Favorite actor or director?",
	"Favorite movie scene?",
	"Enter a movie quote.",
	"Favorite movie soundtrack?",
	"Enter a movie character.",
	"Favorite movie era?",
];
const CREATIVE_PROMPTS = [
	"Feeling curious and adventurous. Recommend me a movie that will leave me on the edge of my seat!",
	"In the mood for a heartwarming romance. Show me a movie that will make me believe in love!",
	"Craving some mind-bending twists and turns. Surprise me with a thought-provoking thriller!",
	"Seeking a cinematic escape to a magical world. Recommend a fantasy movie that will transport me!",
	"Feeling nostalgic for some classic cinema. Suggest a timeless movie that will take me back in time!",
	"Want to laugh until my sides hurt. Give me a comedy that will brighten my day!",
	"Looking for an epic adventure. Show me a movie with action, heroics, and jaw-dropping scenes!",
	"In the mood to explore deep emotions. Recommend a drama that will tug at my heartstrings.",
	"Feeling captivated by history. Show me a movie set in a different era with gripping stories.",
	"Yearning for some animated magic. Suggest an animated movie that will spark my imagination!",
	"Ready to dive into a character's journey. Recommend a movie with rich character development.",
	"Craving a visually stunning masterpiece. Show me a movie that's a feast for the eyes!",
	"Want to ponder life's mysteries. Suggest a film with a thought-provoking narrative.",
	"Seeking inspiration and motivation. Recommend a movie that will uplift my spirits!",
	"Feeling adventurous in the cosmos. Show me a captivating sci-fi movie set in outer space!",
	"In the mood for an emotional rollercoaster. Suggest a movie with powerful storytelling.",
	"Want to explore the darker side of human nature. Recommend a compelling psychological thriller!",
	"Craving a feel-good movie to warm my heart. Show me a movie that will make me smile!",
	"Ready for a spiritual and philosophical journey. Suggest a movie that will make me ponder life's big questions.",
	"Looking for hidden gems and underrated treasures. Show me a movie that deserves more love!",
];

interface MessageInputBoxProps {
	className?: string;
	placeholder?: string;
}

const MessageInputBox: React.FC<MessageInputBoxProps> = (props) => {
	const randomCreativePrompt = useRandomText(CREATIVE_PROMPTS);

	const [magicText, setMagicText] = useState<string>("");

	const handleMagicWand = () => {
		if (magicText === randomCreativePrompt) {
			const randomIndex = Math.floor(Math.random() * CREATIVE_PROMPTS.length);
			setMagicText(CREATIVE_PROMPTS[randomIndex]);

			return;
		}
		setMagicText(randomCreativePrompt);
	};

	return (
		<div className="w-full md:max-w-lg">
			<div className="box-with-border-r flex w-full items-center  px-2 pb-1 pt-2">
				<TextAreaBox
					placeholder={"Find your next movie..."}
					identifier="prompt"
					required
					minLength={3}
					maxLength={500}
					className="w-full text-sm"
					value={magicText}
					onChange={(text: string) => {
						setMagicText(text);
					}}
				/>
				<button
					type="submit"
					className="mx-4 transition-colors hover:text-pink-700"
				>
					<BsFillSendFill size={24} />
				</button>
			</div>
			<button
				type="button"
				className="[&>svg]:hover:wand-wave focus:none  mx-auto mt-4 flex items-center gap-2 pr-7 text-pink-700 transition-colors hover:text-pink-700 focus:outline-none [&>span]:hover:underline"
				onClick={handleMagicWand}
			>
				<SlMagicWand
					className=""
					size={24}
				/>
				<span>Magic Wand!</span>
			</button>
		</div>
	);
};

export default MessageInputBox;
