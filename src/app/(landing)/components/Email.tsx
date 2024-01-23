import CallToAction from "../../components/CallToAction";
import { AiOutlineRight } from "react-icons/ai";

import TextBox from "../../components/TextBox";
import { VscError } from "react-icons/vsc";

const Email = ({ id }: { id: string }) => {
	return (
		<form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
			<TextBox
				boxType="email"
				placeholder="Email address"
				errorMessage="Please enter a valid email address."
				className="[&:has(:invalid:first-child)]:mb-6 sm:[&:has(:invalid:first-child)]:mb-0"
				identifier={`${id}-email`}
				Icon={VscError}
			/>

			<CallToAction
				text="Get Started"
				className="mx-auto text-lg"
			>
				<AiOutlineRight
					className="ml-2 inline-block"
					size={18}
				/>
			</CallToAction>
		</form>
	);
};

export default Email;
