import { useEffect, useState } from "react";

const useRandomText = (placeholders: string[]) => {
	const [placeholder, setPlaceholder] = useState("");

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * placeholders.length);
		setPlaceholder(placeholders[randomIndex]);
	}, [placeholders]);

	return placeholder;
};

export default useRandomText;
