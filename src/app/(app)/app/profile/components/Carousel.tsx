"use client";
import Flicking from "@egjs/react-flicking";
import React from "react";
import wanda from "@/assets/wanda.png";
import thor from "@/assets/thor.png";
import black from "@/assets/black.png";
import MovieCard from "../../components/MovieCard";
import Image from "next/image";
import Button from "./Button";

const movies = [
  {
    title: "Klaus Mikaelson",
    image: thor,
  },
  {
    title: "Black Panther",
    image: wanda,
  },
  {
    title: "Wanda",
    image: black,
  },
  {
    title: "Thor",
    image: thor,
  },
];

const Carousel: React.FC = () => {
  return (
    <>
      <Flicking
        cameraClass="flex w-[300%] h-full sm:w-[200%] md:w-[200%] lg:w-[100%] gap-6 md:justify-center "
        align={"prev"}
        moveType="snap"
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="max-[300]:w-[100%] min-w-[150px] max-w-[230px] sm:max-w-[300px] md:max-w-[350px]"
          >
            <MovieCard title={movie.title}>
              <Image src={movie.image} alt="movieImg" />
            </MovieCard>
          </div>
        ))}
      </Flicking>
      <Button />
    </>
  );
};

export default Carousel;
