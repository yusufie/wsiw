import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const Form: React.FC = () => {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    e.currentTarget.reset();

    // TODO: Backend bağlantısı yapılacak.
  }

  return (
    <form className="w-full max-md:mt-10 ">
      <div className="grid w-full grid-cols-1 gap-y-6 max-sm:place-items-center ">
        <InputField type="text" placeholder=" " name="" label="Name" required />
        <InputField
          type="text"
          placeholder=" "
          name=""
          label="E-mail"
          required
        />
        <TextAreaField
          placeholder=" "
          name=""
          label="Your message.."
          required
        />
        <button className="w-full max-w-[160px] rounded-2xl bg-pink-500 py-3 text-center text-white hover:bg-pink-600 ">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
