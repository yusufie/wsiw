import React from "react";
import { wsiError, type WSIError } from "@/utils/errors";

interface Props {
	errorText: string | string[];
}

const ErrorInfo = ({ errorText }: Props) => {
	const errorMessage: any = Array.isArray(errorText)
		? errorText.join(", ")
		: errorText;

	let error: any;
	if (wsiError[errorMessage as WSIError])
		error = wsiError[errorMessage as WSIError];
	else if (Object.values(wsiError).includes(errorMessage)) error = errorMessage;
	else error = wsiError["Default"];

	return (
		<p className="mb-4 break-words bg-red-600 px-2 py-2 text-start text-sm font-medium text-gray-100">
			{error}
		</p>
	);
};

export default ErrorInfo;
