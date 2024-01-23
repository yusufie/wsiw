import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
	link: string;
	text?: string;
	className?: string;
}

const GoBack = (props: Props) => {
	return (
    <Link
      href={props.link}
      className={` mt-8 flex items-center gap-1 text-lg 
					transition-colors duration-100 ease-in-out hover:text-white hover:underline ${props.className}

                    `}
      style={{
        color: "#cf5a8b",
      }}
    >
      <IoIosArrowBack size={24} />
      <p className="font-medium ">{props.text ? props.text : "Go back"}</p>
    </Link>
  );
};

export default GoBack;
