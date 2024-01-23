import React from "react";
import SessionProvider from "./SessionProvider";
import QueryProvider from "./QueryProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryProvider>
			<SessionProvider>{children}</SessionProvider>
		</QueryProvider>
	);
};

export default Providers;
