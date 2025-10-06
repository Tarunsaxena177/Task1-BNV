import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative h-screen w-full">
      <Image
        src="/grass-field.jpg"
        alt="Rice field background for The Oi Brewery"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />

      <div className="absolute inset-0 z-10 flex flex-col">
        <nav className="flex justify-start items-center p-3 px-6 text-white text-xs md:text-sm">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Subscribe
            </a>
            <a href="#" className="hover:text-yellow-400">
              Help
            </a>
            <a href="#" className="hover:text-yellow-400">
              Visit
            </a>
          </div>
        </nav>

        <nav className="flex justify-between items-center px-6 py-4 absolute top-8 left-0 right-0 text-white">
          <div className="hidden lg:flex space-x-6 text-lg">
            <a
              href="#"
              className="text-orange-400 border-b-2 border-orange-400 pb-1"
            >
              Home
            </a>
            <a href="#" className="hover:text-orange-400">
              Shop
            </a>
            <a href="#" className="hover:text-orange-400">
              About
            </a>
            <a href="#" className="hover:text-orange-400">
              Explore
            </a>
            <a href="#" className="hover:text-orange-400">
              Blog
            </a>
            <a href="#" className="hover:text-orange-400">
              Contact
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
            <div className="w-8 h-8 bg-orange-400 flex items-center justify-center rounded-sm">
              <div className="w-3 h-3 bg-white"></div>
            </div>
          </div>

          <button
            type="button"
            className="bg-white text-black py-2.5 px-6 rounded-full text-sm font-bold hover:bg-gray-200 transition duration-300 flex items-center shadow-lg absolute right-6" // Adjusted padding and positioning
          >
            Visit Our Brewery
            <svg
              className="ml-2 w-4 h-4 text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </nav>

        <div className="flex-grow flex flex-col justify-center items-center relative text-white text-center p-4 mt-8">
          <p className="tracking-widest mb-40 text-sm uppercase">
            Award Winning Sake From
          </p>
          <h1 className="absolute left-[650px] text-6xl md:text-8xl font-serif mb-22">
            The Oi Brewery
          </h1>

          <p
            className="absolute text-8xl font-handwritten font-extralight italic mt-5 -mr-130 text-orange-400"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            Crafted with passion
          </p>

          <a
            href="#"
            className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold flex items-center hover:bg-orange-400 transition duration-300"
          >
            Learn More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer hidden md:block">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </div>

        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer hidden md:block">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>

        <div className="flex justify-center p-4 space-x-2 pb-8">
          <span className="h-2 w-2 bg-white rounded-full opacity-100"></span>
          <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
          <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
    </header>
  );
};
export default Header;
