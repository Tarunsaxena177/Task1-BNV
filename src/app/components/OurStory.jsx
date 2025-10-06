import React from "react";

const images = [
  { src: "/beer.jpg", alt: "Glass of beer at the bar", id: "img1" },
  {
    src: "/house.jpg",
    alt: "Brewery building exterior",
    id: "img2",
  },
  {
    src: "/machinery.jpg",
    alt: "Brewer working with tanks",
    id: "img3",
  },
  { src: "/bottles.jpg", alt: "Beer bottle in field", id: "img4" },
  { src: "/tanks.jpg", alt: "Fermentation tanks", id: "img5" },
];

const OurStory = () => {
  return (
    <section className="bg-white py-16 md:py-24 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-16">
          <div className="w-12 h-px bg-gray-300"></div>
          <p className="mx-4 text-xs tracking-widest font-sans uppercase text-gray-700">
            Our Story
          </p>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>

        <h1 className="text-xl md:text-2xl lg:text-4xl max-w-4xl mx-auto font-medium text-gray-800 leading-snug mb-20">
          Nestled in the heart of Pune, our brewery blends locally sourced
          ingredients with time-honored brewing traditions. Each pour tells the
          story of our craft, our people, and the vibrant community we call
          home.
        </h1>

        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10 w-full">
          <div className="flex flex-wrap w-full justify-center md:justify-start">
            <div className="w-full sm:w-1/2 md:w-1/4  p-2">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-[250px]  object-cover shadow-xl"
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 p-2">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-[250px]  object-cover shadow-xl"
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 p-2">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-[250px]  object-cover shadow-xl"
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col justify-center items-center md:items-start text-left md:border-l md:border-orange-400 md:pl-6">
              <span className="text-6xl md:text-7xl font-light text-black italic ">
                80%
              </span>
              <span
                className="text-5xl  text-orange-500 mb-20 "
                style={{ fontFamily: "Brush Script MT, cursive" }}
              >
                Waste Recycled
              </span>
              <p className="font-sans text-xl text-black">
                Crafted with eco-conscious care.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full justify-center md:justify-start mt-4 ">
            <div className="hidden md:block md:w-1/4 p-2"></div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-col justify-center items-center md:items-start text-left md:border-l md:border-orange-400 md:pl-6">
              <span className="text-6xl md:text-7xl font-light text-black italic ">
                10+
              </span>
              <span
                className="text-5xl  text-orange-500 mb-20"
                style={{ fontFamily: "Brush Script MT, cursive" }}
              >
                Awards
              </span>
              <p className="font-sans text-xl text-black">
                Award-winning craft excellence.
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 p-2">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-[250px]  object-cover shadow-xl"
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 p-2">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-[250px]  object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden mt-16">
        <div
          className="h-40 bg-contain bg-bottom opacity-5"
          style={{
            backgroundImage: "bg-1.png",
            backgroundRepeat: "repeat-x",
          }}
        ></div>
      </div>
    </section>
  );
};

export default OurStory;
