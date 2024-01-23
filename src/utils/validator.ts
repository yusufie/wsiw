export const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

// min 6 characters
export const PASS_MIN_LENGTH = 6;
export const validatePassword = (password: string) => {
	return password.length >= 6;
};
