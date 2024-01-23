import { NextResponse } from "next/server";

export const InternalServerError = NextResponse.json(
	{
		message: "Internal Server Error",
	},
	{ status: 500 }
);

export const NotAuthorizedError = NextResponse.json(
	{
		message: "Not Authorized",
	},
	{ status: 401 }
);

export const BadRequestError = (message: string) =>
	NextResponse.json(
		{
			message,
		},
		{ status: 400 }
	);
