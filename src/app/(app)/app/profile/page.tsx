import Image from "next/image";
import React from "react";
import user from "@/assets/user.png";
import { FiEdit2 } from "react-icons/fi";
import Carousel from "./components/Carousel";

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto no-scrollbar relative mb-[138px] flex w-full justify-center overflow-x-auto md:mt-[82px]">
      <div className="no-scrollbar mx-12 w-full overflow-x-auto sm:mx-20 md:mx-[120px]">
        <div className="mx-2 flex h-36 justify-between">
          <div className="flex md:w-[387px]">
            <Image
              src={user}
              alt="userImg"
              className="w-[70px] object-contain md:w-[140px]"
            />
            <h1 className="md:ml-9 ml-3 mt-14 text-sm font-bold md:mt-12 md:text-2xl lg:text-3xl">
              ALYA AYDIN
            </h1>
          </div>
          <div className="mt-[50px] flex h-7 w-20 cursor-pointer items-center justify-center rounded-2xl bg-pink-500 md:mt-12 md:h-11 md:w-[161px]">
            <p className="mr-2 text-sm font-medium md:mr-3 md:text-xl">Edit</p>
            <FiEdit2 size={24} />
          </div>
        </div>
        <div className="no-scrollbar relative w-full overflow-x-auto">
          <h1 className="mb-8 font-medium md:mt-10 md:text-3xl">
            Favorite Movies
          </h1>
          <Carousel />
        </div>
        <div className="no-scrollbar relative mt-[78px] w-full overflow-x-auto">
          <h1 className="mb-6 font-medium md:text-3xl">Your Calendar</h1>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Profile;
