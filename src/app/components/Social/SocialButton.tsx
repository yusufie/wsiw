import React from "react";
import Link from "next/link";
import { text } from "stream/consumers";
interface SocialButtonProps {
	children: React.ReactNode;
	link: string;
	text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
	children,
	link,
	text,
}) => {
	return (
		<Link
			href={link}
			title={text}
			className="hover:text-pink-700"
			target="_blank"
		>
			{children}
		</Link>
	);
};

export default SocialButton;
