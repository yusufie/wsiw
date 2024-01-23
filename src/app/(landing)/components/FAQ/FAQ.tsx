import React from "react";
import Expandable from "./Expandable";

const faqs = [
	{
		question: "How does 'What Should I Watch?' work?",
		answer:
			"'What Should I Watch?' utilizes advanced algorithms to analyze your mood and preferences. Simply share how you're feeling, and our app generates personalized movie recommendations based on your input.",
	},
	{
		question: "Can I save movies for later?",
		answer:
			"Absolutely! You can save movies to your watchlist within the app. Whenever you come across an intriguing recommendation, just add it to your watchlist and revisit it whenever you're ready to watch.",
	},
	{
		question: "Which streaming platforms are supported?",
		answer:
			"We support popular streaming platforms such as Netflix, Disney+, AppleTV, Prime Video, HBOMax, and Hulu. You can find direct streaming links to your recommended movies, making it easy to access them on your preferred platform.",
	},
	{
		question: "Are the movie recommendations personalized?",
		answer:
			"Yes! Our recommendation algorithm takes into account your mood, genre preferences, and past ratings to provide personalized movie suggestions tailored to your unique taste. Discover movies that resonate with you on a deeper level.",
	},
	{
		question: "Is 'What Should I Watch?' available as a mobile app?",
		answer:
			"We're excited to announce that a mobile app for 'What Should I Watch?' is currently in development! Stay tuned for updates as we work hard to bring you the best movie-watching experience on your iOS and Android devices. We appreciate your patience and can't wait to unveil the app to you soon!",
	},
	{
		question: "Can I share my favorite movies with friends?",
		answer:
			"Yes, you can! Our app allows you to share your favorite movies, movie recommendations, or curated movie collections with friends on various social media platforms. Spread the movie magic and start conversations about your cinematic discoveries!",
	},
];

const FAQ = () => {
	return (
		<div className="w-full border-t-4 border-slate-800 ">
			<section className="mx-auto mt-4 max-w-screen-lg p-4 text-center text-white">
				<h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>

				<div>
					{faqs.map((faq, index) => (
						<Expandable
							key={index}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default FAQ;
