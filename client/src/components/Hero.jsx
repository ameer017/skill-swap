import React from "react";
import { PiSwapBold } from "react-icons/pi";

const Hero = () => {
  return (
    <section
      className="h-screen bg-lime-100 flex justify-center items-center"
      aria-label="Hero Section"
    >
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 text-center ">
            <h1 className="text-5xl font-bold leading-tight">Skill Swap</h1>
            <p className="text-lg text-gray-600">Aura for Aura</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/3 p-6">
            <PiSwapBold
              className="object-cover h-64 w-full md:h-96"
              aria-label="Skill Swap Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
