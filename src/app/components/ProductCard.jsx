import React from "react";

const ProductCard = () => {
  return (
    <section className="relative h-96 md:h-[75vh] w-full flex items-center justify-center">
      <img
        src="ProductInfo.jpg"
        alt="Stainless steel brewing tanks in a brewery"
        layout="fill"
        quality={150}
        className="absolute inset-0 h-full w-full object-cover brightness-[.65]"
      />

      <div className="absolute z-10 text-white text-center p-4">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-2 leading-tight">
          Behind the Brew
        </h2>

        <p className="text-3xl md:text-4xl font-script italic text-yellow-400 mb-8">
          Brewing Process
        </p>

        <a
          href="#"
          className="inline-flex items-center bg-white text-black py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300 shadow-xl"
        >
          Step Inside the Brewery
          <svg
            className="ml-3 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ProductCard;
