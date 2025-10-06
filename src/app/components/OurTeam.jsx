import React from "react";

const teamMembers = [
  {
    name: "Rory Webster",
    role: "Founder",
    imageUrl: "/member-1.jpg",
  },
  {
    name: "Guy Hawkin",
    role: "Brewmaster",
    imageUrl: "/member-2.jpeg",
  },
  {
    name: "Simon Weaver",
    role: "Chief Marketing",
    imageUrl: "/member-3.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="max-w-full mx-15 my-9 py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-px bg-gray-400"></div>
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          OUR TEAM
        </p>
      </div>

      <h2 className="text-6xl font-serif font-bold text-gray-900 leading-tight">
        THE MAKERS
        <span className="block text-4xl text-orange-500 italic font-normal ml-0 mt-2">
          passionate growers
        </span>
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3  ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col text-left md:border-l md:border-gray-300"
          >
            <div className="relative w-full aspect-square overflow-hidden mb-6 ">
              <img
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                className="w-full h-full object-cover  transform transition duration-500 hover:scale-105 shadow-xl"
                loading="lazy"
              />
            </div>

            <h3 className="text-4xl ml-10 font-serif  text-gray-900 mb-1">
              {member.name}
            </h3>

            <p className="text-2xl ml-10  text-orange-500">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="absolute left-0 bottom-0 opacity-20 hidden lg:block"></div>
    </section>
  );
};

export default OurTeam;
