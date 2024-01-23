"use client";
import React from "react";
import Link from "next/link";
import SignOut from "@/app/(auth)/components/SignOut";
import { usePathname } from "next/navigation";

const Links = () => {
	const pathname = usePathname();
	const activeClass =
		"box-with-border-r flex items-center  px-4 py-2 no-underline border-none";
	const hoverClass =
		"hover:bg-pink-700  px-4 py-2 rounded-md transition duration-300 ease-in-out no-underline border-pink-700";
	return (
		<>
			<li style={{ borderBottomWidth: 0 }}>
				<Link
					href="/app"
					className={pathname === "/app" ? activeClass : hoverClass}
				>
					Home
				</Link>
			</li>
			<li style={{ borderBottomWidth: 0 }}>
				<Link
					href="/app/profile"
					className={pathname === "/profile" ? activeClass : hoverClass}
				>
					Profile
				</Link>
			</li>
			<li style={{ borderBottomWidth: 0 }}>
				<Link
					href="/app/history"
					className={pathname === "/app/history" ? activeClass : hoverClass}
				>
					History
				</Link>
			</li>
			<li style={{ borderBottomWidth: 0 }}>
				<Link
					href="/app/settings"
					className={pathname === "/settings" ? activeClass : hoverClass}
				>
					Settings
				</Link>
			</li>
			<li style={{ borderBottomWidth: 0 }}>
				<SignOut />
			</li>
		</>
	);
};

export default Links;
