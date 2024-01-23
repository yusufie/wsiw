import Amico from "@/assets/amico.svg";
import Form from "./components/Form";
import Image from "next/image";

export const metadata = {
  title: "Contact Us - What should I watch",
  description:
    "Contact us. Do not hesitate to contact us for your questions, comments or cooperation requests. We will be happy to assist you.",
};

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto mb-10 ">
      <div className="flex flex-col items-center">
        <h1 className="mt-10 text-center text-5xl font-medium  text-white">Contact Form</h1>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full place-items-center mt-10 ">
        <Image src={Amico} alt="svg" className="max-w-[450px] max-md:max-w-[250px] max-lg:max-w-[350px] "  />
        <Form />
        </div>
      </div>
      </div>
  );
};

export default ContactPage;
