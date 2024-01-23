import React from "react";
import Logo from "./Logo";

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<header className="header container mx-auto flex  items-center justify-between px-5 py-8 ">
			<Logo />
			{children}
		</header>
	);
};

export default Header;
