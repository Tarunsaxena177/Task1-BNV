import React from "react";

const Testimonial = () => {
  return (
    <section className="relative w-full my-19 h-[1400px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/cheers.webp"
          alt="People raising glasses in a pub, blurred"
          className="w-full h-full object-cover brightness-[.75]"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 top-[25vh] left-[60px] p-4 sm:p-8 z-10">
        <div className="max-w-[80vh] p-8 sm:p-12 bg-white  h-[72vh]  bg-opacity-70 backdrop-blur-sm opacity-85 shadow-2xl relative">
          <div className="mb-6 flex items-center">
            <img
              src="Quote.png"
              alt="Quote Icon"
              className="w-42 h-42 text-orange-500 mr-4"
            />

            <p className="text-7xl font-serif italic text-orange-500 font-normal">
              What Visitors Say
            </p>
          </div>

          <blockquote className="text-3xl text-gray-800 leading-relaxed mb-6 font-medium">
            "Every visit feels special, the atmosphere is warm, the people are
            welcoming, and the beer is simply outstanding. From crisp lagers to
            rich stouts, there's always something new to discover. Easily my
            favorite spot in town!"
          </blockquote>

          <p className="text-3xl font-semibold mt-16 text-gray-900">
            Kevin Williams
          </p>
          <p className="text-xl uppercase mt-4 tracking-wider text-gray-600 mb-4">
            VISITOR
          </p>

          <div className="flex space-x-2">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-400 rounded-full opacity-50"></span>
            <span className="h-2 w-2 bg-gray-400 rounded-full opacity-50"></span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 w-full  bg-opacity-20 text-white py-4 flex justify-around text-[45px]  tracking-widest uppercase ">
        <span className="hidden sm:inline opacity-40">100% Organic</span>
        <span className="opacity-40">Taste and Blend</span>
        <span className="hidden sm:inline opacity-40">Secret Formula</span>
        <span className="hidden md:inline opacity-40">100% Organic</span>
      </div>
    </section>
  );
};

export default Testimonial;
