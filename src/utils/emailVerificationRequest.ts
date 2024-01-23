import { createTransport } from "nodemailer";

import { SendVerificationRequestParams } from "next-auth/providers/email";

export async function sendVerificationRequest(
	params: SendVerificationRequestParams
) {
	const { identifier, url, provider } = params;
	const { host } = new URL(url);

	const transport = createTransport(provider.server);
	const result = await transport.sendMail({
		to: identifier,
		from: provider.from,
		subject: `Sign in to What Should I Watch`,
		text: text({ url, host }),
		html: html({ url }),
	});
	const failed = result.rejected.concat(result.pending).filter(Boolean);
	if (failed.length) {
		throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
	}
}

function html(params: { url: string }) {
	const { url } = params;

	const color = {
		mailBg: "#fff",
		cardBg: "#000",
		primary: "#BE185D",
		accent: "#A5680E",
		text: "#fff",
	};

	return `
    <body style="background: ${color.mailBg}">
        <table width="100%" border="0" cellspacing="20" cellpadding="0"
            style="background: ${color.cardBg}; border: 2px solid ${color.primary}; max-width: 600px; margin: auto; border-radius: 10px;">
            <tr>
                <td align="center"
                    style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
                    Sign in to <strong style="color: ${color.primary}">What Should I Watch</strong>
                </td>
            </tr>
            <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="border-radius: 5px;" bgcolor="${color.cardBg}">
                    <a href="${url}"
                        target="_blank"
                        style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.text}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 2px solid ${color.accent}; display: inline-block; font-weight: bold;">
                        Go to App
                    </a>
                    </td>
                </tr>
                </table>
            </td>
            </tr>
            <tr>
            <td align="center"
                style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
                If you did not request this email you can safely ignore it.
            </td>
            </tr>
        </table>
    </body>
    `;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
	return `Sign in to ${host}\n${url}\n\n`;
}
