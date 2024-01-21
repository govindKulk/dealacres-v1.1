import Image from "next/image";
import React from "react";
import background from "../../../public/Bloghead.jpg";

const Bloghead = () => {
  return (
    <div className="relative  min-h-[1700px] sm:min-h-[800px]  md:min-h-screen max-h-full after:absolute after:bg-black/40 after:inset-0 ">

      
      <div className="absolute flex flex-col  gap-4 inset-0 z-20 p-4 h-full w-full text-white">
        <div className="mt-4 self-center md:self-start flex justify-start">
          <h1 className="text-3xl drop-shadow-xl font-bold">
            Information{" "}
            <span className="bg-white text-black p-1 rounded-sm">HUB</span>
          </h1>
        </div>

        <div className="h-full w-full flex flex-col items-center justify-center">
        <div className=" flex mt-2 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border-2 sm:w-[300px] md:w-[400px] lg:w-[900px] text-xl text-black px-4 py-2 rounded-sm placeholder-black"
          />
        </div>
        <div className="mt-4 flex justify-center w-2/3  mx-auto">
          <h2 className="  p-3  text-2xl font-bold text-center">
            Deal Acres is your ultimate destination for valuable insights and
            knowledge in the ever-evolving world of real estate.
          </h2>
        </div>
        <div className="flex items-stretch flex-wrap  justify-center gap-4 ">
          <div className="bg-black/80 px-4 w-[150px] md:w-52 pt-4 pb-6 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custompink group-hover:text-pink-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>

          <div className="bg-black/80 px-4 w-[150px] md:w-52 pt-4 pb-6 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custompurple group-hover:text-purple-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
          <div className="bg-black/80 px-4 w-[150px] md:w-52 pt-4 pb-6 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-customgreen group-hover:text-green-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
          <div className="bg-black/80 px-4 w-[150px] md:w-52 pt-4 pb-6 transition hover:bg-white/60 group hover:text-black">
            <h2 className="mt-4 text-xl uppercase font-semibold text-custommustard group-hover:text-yellow-700">
              Infocus Rera
            </h2>
            <p className="text-sm mt-3">
              Decoding the Real Estate (Regulation and Development) Act, 2016
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute inset-0   w-full h-full">
      <Image
        src={background}
        alt="Header Background"
        className="w-full h-full object-cover absolute inset-0 "
        
      />
      </div>
    </div>
  );
};

export default Bloghead;
