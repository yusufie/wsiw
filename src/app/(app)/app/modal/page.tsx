import React from "react";
import Image from "next/image";
import wanda from "@/assets/wanda.png";
import MovieCard from "../components/MovieCard";
import { IoStarSharp } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";
import netflix from "@/assets/netflix.png";
import { MdNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import elemental from "@/assets/elemental.png";
import fragman from "@/assets/fragman.png";
import FavoriteButton from "@/app/components/FavoriteButton";

const MovieCardModal: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className=" mb-16 mt-8 flex flex-col justify-center max-lg:items-center lg:flex-row">
        <div className="w-full max-w-[380px]  p-4">
          <MovieCard title={"Elemental"}>
            <Image priority={true} src={wanda} alt="movie" />
          </MovieCard>
        </div>
        <div className=" flex  flex-col justify-between">
          <div className="p-4 max-lg:mt-7 lg:ml-8">
            <div className="flex justify-between ">
              <div className="flex max-sm:flex-col sm:gap-4 ">
                <h1 className="text-4xl font-bold">Elemental</h1>
                <div className="flex gap-2 sm:gap-4">
                  <span className="mt-1 text-3xl">IMDB</span>
                  <span className="mt-1">
                    <IoStarSharp size={32} color="#F0C763" />
                  </span>
                  <span className="mt-1 text-3xl">9.8</span>
                </div>
              </div>
              <FavoriteButton />
            </div>
            <div className="mt-4 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                earum obcaecati eveniet cupiditate autem laudantium beatae quae
                impedit illo doloremque, sint perspiciatis reprehenderit at
                aliquid odit ut vero unde praesentium optio assumenda maiores
                dolor! At, sequi atque iusto, aperiam labore optio placeat illum
                aliquam doloribus maxime blanditiis voluptatem quod quos?
              </p>
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold">
                Why Do We Suggest This To You ?
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                quod vel at laboriosam officia fugiat incidunt amet porro magni
                enim nihil labore ut facere consectetur aliquid recusandae,
                tempore possimus ipsam?
              </p>
            </div>

            <div className="mt-6">
              <h1 className="mb-2 text-2xl font-bold text-pink-500">
                Watch From Here
              </h1>
              <Image src={netflix} alt="foti" width={40} height={40} />
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="mb-3 flex pr-10">
              <h3 className="text-xl font-bold text-pink-500">watch trailer</h3>
              <span className="ml-4 mt-1">
                <HiCursorClick size={24} className="text-pink-500" />
              </span>
            </div>
            <div className="flex">
              <button>
                <MdOutlineNavigateBefore
                  size={32}
                  className="text-white hover:text-pink-500"
                />
              </button>
              <div className="flex flex-col gap-2 sm:flex-row ">
                <Image src={fragman} alt="fragman" />
                <Image src={elemental} alt="fragman" />
              </div>
              <button>
                <MdNavigateNext
                  size={32}
                  className="text-white hover:text-pink-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardModal;
