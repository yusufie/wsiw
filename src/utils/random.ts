import { randomBytes, randomUUID } from "crypto";

export const generateRandomToken = () => {
	return randomUUID?.() ?? randomBytes(32).toString("hex");
};
