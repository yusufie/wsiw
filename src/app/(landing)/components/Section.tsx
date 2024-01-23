import Image from "next/image";

interface Props {
	heading: string;
	subheading: string;
	image: string;
	imageAlt: string;
	reverse?: boolean;
}

const Section: React.FC<Props> = ({
	heading,
	subheading,
	image,
	imageAlt,
	reverse,
}) => {
	return (
		<section className="w-full border-t-4 border-slate-800 bg-black ">
			<div
				className={`mx-auto flex max-w-screen-lg flex-col items-center justify-center pt-8 text-white  ${
					reverse ? "md:flex-row-reverse" : "md:flex-row"
				}`}
			>
				<div className="p-8 text-center md:basis-3/5 md:text-start">
					<h2 className="mb-4 text-3xl font-bold md:text-4xl ">{heading}</h2>
					<p className="text-base leading-7 tracking-wide md:text-lg">
						{subheading}
					</p>
				</div>
				<div className="p-8 md:basis-2/5 md:p-4">
					<Image
						src={image}
						alt={imageAlt}
						width={720}
						height={480}
					/>
				</div>
			</div>
		</section>
	);
};

export default Section;
