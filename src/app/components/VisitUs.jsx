import React from "react";

const keyFacts = [
  {
    title: "100% Organic",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.",

    iconUrl: "https://placehold.co/40x40/fef3c7/f97316?text=🌾",
  },
  {
    title: "Secret Formula",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia.",

    iconUrl: "Secret-formula.png",
  },
];

const VisitUs = () => {
  return (
    <section className="max-w-full mx-15 p-4 sm:p-6 lg:p-8   ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="relative lg:min-h-[870px] h-[770px] lg:h-auto  overflow-hidden  mb-8 lg:mb-0">
          <img
            src="/house.jpg"
            alt="The Oi Brewery building exterior"
            className="absolute inset-0 h-full w-full object-cover brightness-[.9]"
            loading="lazy"
          />

          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <h3 className="text-4xl font-extrabold mb-4 font-serif">BREWERY</h3>

            <a
              href="#"
              className="inline-flex items-center text-white text-lg font-semibold transition duration-300 w-fit group"
            >
              Visit Now
              <span className="ml-3 h-8 w-8 rounded-full flex items-center justify-center border-2 border-white group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                <svg
                  className="w-4 h-4"
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
              </span>
            </a>
          </div>

          <div className="absolute bottom-4 left-8 flex space-x-2">
            <span className="h-2 w-2 bg-orange-500 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>

        <div className="p-4 lg:p-0">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-px bg-gray-400"></div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
              VISIT US
            </p>
          </div>

          <h2 className="text-5xl lg:text-8xl font-serif  text-gray-900 leading-tight">
            EXPERIENCE
            <span className="block text-4xl text-orange-500 font-serif italic font-normal ml-0 mt-2">
              discover our land
            </span>
          </h2>

          <p className="mt-12 text-gray-600 text-base max-w-lg">
            Lorem Ipsum is simply a dummy or placeholder text commonly used in
            graphic design, publishing, and web development.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {keyFacts.map((fact, index) => (
              <div key={index} className="flex flex-col space-y-3">
                <img
                  src={fact.iconUrl}
                  alt={fact.title}
                  className="w-10 h-10 mb-2"
                />

                <h3 className="text-lg font-bold text-gray-800">
                  {fact.title}
                </h3>

                <p className="text-gray-500 text-xl">{fact.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center space-x-6">
            <div className="text-left">
              <p className="text-7xl   text-gray-900 tracking-tight">5.2K</p>
              <p className="text-sm text-gray-500 mt-1">visitors per year</p>
            </div>

            <div className="flex">
              <img
                key=""
                src="avatars.png"
                alt=""
                className="w-full h-15 ml-15 mb-5 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
