import Image from 'next/image';
import NotFoundGif from '../assets/error.gif';
import Link from 'next/link';
import { FC } from 'react';


const PageNotFound: FC = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen text-white bg-black">
      <div className="flex flex-col items-center lg:w-1/2 px-4 lg:px-0">
        <h1 className="text-5xl lg:text-8xl font-extrabold font-serif mb-6 lg:mb-16 text-pink-700 text-center">Oops!</h1>
        <h1 className="text-base lg:text-xl font-mono mb-3 lg:mb-6 text-center">
          Please check the URL or navigate back to the homepage.
        </h1>
        <h1 className="text-base lg:text-lg font-extralight mb-3 lg:mb-6 text-center">
          The page you are looking for might have been removed.
        </h1>
        <h1 className="text-base lg:text-lg font-extralight mb-6 lg:mb-12 text-center">
          Name changed or is temporarily unavailable.
        </h1>
        <Link href={'/'} >
        <div className="relative z-50 cursor-pointer select-none p-2 text-white lg:ml-2 lg:[&>*:nth-child(4)]:hover:skew-y-3">
          <span className="absolute hidden sm:inline">GO BACK</span>
          <div className="ml-3 mr-2 mt-3 lg:mt-5 hidden text-lg lg:text-3xl sm:block">HOME</div>
          <div className="text-xl lg:text-4xl font-bold sm:hidden">Home</div>
          <span className="absolute left-0 top-0 -z-10 h-full w-full -skew-y-3 bg-pink-700 transition-transform"></span>
        </div>
        </Link>
       
      </div>
      <div className="flex items-center justify-center lg:w-1/2 px-4 lg:px-0">
        <Image priority={true}  src={NotFoundGif} alt="Error" width={500} height={500} />
      </div>
    </div>
    </>
  );
};

export default PageNotFound