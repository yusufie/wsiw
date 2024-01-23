import React from "react";
import SocialButton from "./SocialButton";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const socials = [
	{
		icon: <TbWorld size={20} />,
		link: "https://www.ozxk.dev/",
		text: "Website",
	},
	{
		icon: <AiFillLinkedin size={20} />,
		link: "https://www.linkedin.com/in/ozxk/",
		text: "LinkedIn",
	},
	{
		icon: <AiFillGithub size={20} />,
		link: "https://github.com/Ouzx",
		text: "GitHub",
	},
];

const Social = () => {
	return (
		<div className="flex gap-2">
			Oguzhan Kandakoglu
			{socials.map((social, index) => (
				<SocialButton
					key={index}
					link={social.link}
					text={social.text}
				>
					{social.icon}
				</SocialButton>
			))}
		</div>
	);
};

export default Social;
