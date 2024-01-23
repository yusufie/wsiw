import React from "react";
import Link from "next/link";
import { headers } from "next/headers";

export const metadata = {
	title: "Privacy-policy - What should I watch",
	description:
		"Check out our terms of service and explore policies for using our platform on our Privacy policy  page",
};

const PrivacyPolicy: React.FC = () => {
	const headersList = headers();
	let host = headersList.get("host");
	host = host ? host : "https://what-should-i-watch.vercel.app";
	return (
		<div className="w-full bg-white">
			<div className="container mx-auto p-6">
				<h1 className="mb-4 text-3xl font-semibold">Privacy Policy</h1>
				<p className="mb-4 text-gray-700">
					Welcome! We want to inform you about how your personal information is
					collected and protected while using our movie search application.
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Collected Information</h2>
				<p className="mb-4 text-gray-700">
					While using our movie search application, we may collect certain
					personal information, which may include: - Username - Email address -
					IP address
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Purposes of Use</h2>
				<p className="mb-4 text-gray-700">
					We may use your personal information for the following purposes: -
					Providing you with our services - Ensuring the security of our system
					- Complying with relevant legal requirements
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Data Sharing</h2>
				<p className="mb-4 text-gray-700">
					We do not share or sell your personal information to third parties,
					but we may disclose it to authorities to comply with legal
					requirements.
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Cookies</h2>
				<p className="mb-4 text-gray-700">
					Cookies are small text files that help us track your usage of the
					website. Your browser has the option to refuse or delete cookies.
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Privacy Policy Updates</h2>
				<p className="mb-4 text-gray-700">
					Our privacy policy may be updated from time to time. We will notify
					you of any changes, and you can find the updated policy here.
				</p>
				<h2 className="mb-2 text-2xl font-semibold">Contact Us:</h2>
				<p className="text-gray-700">
					If you have any questions or feedback regarding our privacy policy,
					please do not hesitate to contact us: By visiting this page on our
					website:{" "}
					<Link
						className="underline" //TODO : Contact Us Linki Güncellenmeli
						href={`https://${host}/contact-us`}
						rel="external nofollow noopener"
						target="_blank"
					>
						{`https://${host}/contact-us`}
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
