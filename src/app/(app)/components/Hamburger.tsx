"use client";
import React, { useState, useEffect } from "react";
import { Twirl as HamburgerX } from "hamburger-react";
import MobileMenu from "./Menu/MobileMenu";

const SCREEN_BREAKPOINT = 1280; // xl breakpoint in tailwind

const Hamburger = () => {
	const [isOpen, setOpen] = useState(false);

	// disable scrolling when menu is open
	useEffect(() => {
		if (!window) return;

		if (window.innerWidth > SCREEN_BREAKPOINT) return;

		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	return (
		<div>
			<span className="relative z-50 text-white ">
				<HamburgerX
					toggled={isOpen}
					toggle={setOpen}
				/>
			</span>
			<div className="overflow-x-hidden">
				<MobileMenu isOpen={isOpen} />
			</div>
		</div>
	);
};

export default Hamburger;
