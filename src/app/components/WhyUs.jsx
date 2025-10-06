import React from "react";

const topReasons = [
  {
    id: "01",
    title: "Premium Taste",
    description:
      "Crafted in small batches for bold, fresh flavors you won't forget.",
  },
  {
    id: "02",
    title: "Handcrafted Brewing",
    description:
      "Every brew is made with care, using time-honored techniques and creativity.",
  },
];

const bottomReasons = [
  {
    id: "03",
    title: "Locally Rooted",
    description:
      "Brewed with local ingredients to celebrate the community we call home.",
  },
  {
    id: "04",
    title: "Sustainable Brewing",
    description:
      "Over 80% of our waste is recycled, brewing responsibly for the future.",
  },
  {
    id: "05",
    title: "For Beer Lovers, By Beer Lovers",
    description:
      "We brew what we love to drink, authentic beers made for enthusiasts.",
  },
  {
    id: "06",
    title: "Brewed to Last",
    description:
      "From crisp lagers to bold ales, our beers are crafted for every occasion.",
  },
];

const FeatureBlock = ({ reason }) => (
  <div className="group flex flex-col space-y-2 md:border-l md:border-gray-400 md:pl-6 h-[200px] w-[350px]">
    <p className="text-xl  text-orange-400 mb-1">{reason.id}</p>

    <h3 className="text-3xl  text-gray-900">{reason.title}</h3>

    <p className="text-gray-500 text-xl">{reason.description}</p>
  </div>
);

const WhyUs = () => {
  return (
    <section className="relative p-20 py-16 mx-20 my-25 bg-white">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 w-full ">
        <div className="pb-10 lg:pb-0 ">
          <div className="flex items-center space-x-4 mb-20">
            <div className="w-6 h-px bg-gray-900"></div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gray-900 opacity-70">
              WHY US
            </p>
          </div>

          <h1 className="text-8xl font-serif  text-gray-900 leading-none tracking-tighter mb-25">
            QUALITY
            <span className="block text-4xl text-orange-500 font-serif italic font-normal ml-0 mt-2">
              more than beer
            </span>
          </h1>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {topReasons.map((reason) => (
              <FeatureBlock key={reason.id} reason={reason} />
            ))}
          </div>
        </div>

        <div className="relative w-full h-[400px] lg:h-[550px]  overflow-hidden shadow-2xl">
          <img
            src="WhyUs.jpg"
            alt="Hands touching a grape vine or tree branch, representing craft"
            className="absolute inset-0 h-full w-full object-cover brightness-[.7]"
            loading="lazy"
          />

          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-white">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4">
                <h4 className="text-5xl lg:text-8xl  text-white">
                  10+
                  <span
                    className="block text-6xl text-orange-500"
                    style={{ fontFamily: "Brush Script MT, cursive" }}
                  >
                    Awards
                  </span>
                </h4>
                <p className="text-lg  tracking-wide mt-10">
                  Award winning craft excellence
                </p>
              </div>

              <div className="p-4">
                <h4 className="text-5xl lg:text-8xl  text-white">
                  80%
                  <span
                    className="block text-6xl text-orange-500"
                    style={{ fontFamily: "Brush Script MT, cursive" }}
                  >
                    waste recycled
                  </span>
                </h4>
                <p className="text-lg  tracking-wide mt-10">
                  Crafted with eco-conscious care
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 opacity-20"
            style={{
              backgroundImage: "url(/brewery_line_art.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          ></div>
        </div>
      </div>

      <div className="mt-16 lg:mt-18 ">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-y-12">
          {bottomReasons.map((reason) => (
            <FeatureBlock key={reason.id} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
