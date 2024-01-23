import React from "react";
import Links from "./Links";

interface Props {
	isOpen: boolean;
}

const MobileMenu: React.FC<Props> = ({ isOpen }) => {
	return (
		<nav
			className={`absolute right-0 top-0 z-10 h-screen bg-pink-700 transition-[width] ${
				isOpen ? "w-full md:w-3/4 lg:w-2/4 " : "w-0"
			}`}
		>
			<ul
				className={`${isOpen ? "visible" : "hidden"}
                mobile-menu-list flex h-full flex-col items-center justify-center gap-4

            `}
			>
				<Links />
			</ul>
		</nav>
	);
};

export default MobileMenu;
