import React from "react";
import ProviderButton from "./ProviderButton";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
const MailButton = ({ link }: { link: string }) => {
	return (
		<Link
			href={link}
			className="w-full"
		>
			<ProviderButton
				className="w-full"
				title="Mail"
			>
				<IoIosMail
					size={32}
					role="img"
					focusable="false"
					className="text-pink-700"
				/>
			</ProviderButton>
		</Link>
	);
};

export default MailButton;
