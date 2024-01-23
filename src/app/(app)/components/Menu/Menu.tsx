import React from "react";
import Links from "./Links";

// XL Breakpoint Menu
const Menu = () => {
	return (
		<nav>
			<ul className="menu-list flex items-center justify-center gap-4">
				<Links />
			</ul>
		</nav>
	);
};

export default Menu;
