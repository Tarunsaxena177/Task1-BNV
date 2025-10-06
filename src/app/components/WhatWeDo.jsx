import React from "react";

const menuItems = [
  {
    name: "Organic Wit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "/orange-wit.png",
  },
  {
    name: "Organic Lager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "lager.png",
  },
  {
    name: "Himalayan Apple Graf",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "apple.png",
  },
  {
    name: "Lemon Seltzer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "lemon.png",
  },
  {
    name: "Smoke Lager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "smoke.png",
  },
  {
    name: "Organic Spout",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

    iconUrl: "spout.png",
  },
];

const WhatWeDo = () => {
  return (
    <section className="max-w-full  mx-auto mb-46 mt-46  sm:px-6 lg:px-8 bg-white text-center">
      <div className="flex justify-center items-center space-x-4 mb-6">
        <div className="w-6 h-px bg-gray-400"></div>
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          WHAT WE DO
        </p>
        <div className="w-6 h-px bg-gray-400"></div>
      </div>

      <h2 className="text-2xl md:text-6xl font-serif font- text-gray-900 leading-snug mx-auto max-w-[130vh]">
        The Heart and Soul Behind Our Authentic Brewery and
        <span className="text-orange-500 ml-3">Exquisite Menu</span>
      </h2>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div className="w-24 h-24 mb-6">
              <img
                src={item.iconUrl}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
