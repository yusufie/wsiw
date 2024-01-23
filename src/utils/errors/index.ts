import { type OAuthError, oAuthError } from "./oAuthErrors";

type wsiError = OAuthError;

export const wsiError = {
	...oAuthError,
} as const;

export type WSIError = keyof typeof wsiError;

export { oAuthError };
