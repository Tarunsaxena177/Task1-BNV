import React from "react";

// Data structure for the articles
const articles = [
  {
    id: 1,
    category: "Sub Category 1",
    date: "APR. 14 TH, 2025",
    title: "From Grain to Glass: How Our Beer Is Born",
    imageUrl: "/article-grain.jpg",
  },
  {
    id: 2,
    category: "Sub Category 1",
    date: "APR. 14 TH, 2025",
    title: "5 Perfect Food Pairings for Our Beers ",
    imageUrl: "/article-pairing.png",
  },
  {
    id: 3,
    category: "Sub Category 1",
    date: "APR. 14 TH, 2025",
    title: "Behind the Brew: A Day in the Life of Our Brewers",
    imageUrl: "/article-brewers.jpg",
  },
];

const ArticleCard = ({ article }) => (
  <div className="flex flex-col w-[6000px] h-[750px]">
    <div className="relative w-full h-[414] overflow-hidden shadow-lg mb-4">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
        loading="lazy"
      />
    </div>

    <div className="flex items-center text-s text-gray-500 my-4 font-medium tracking-wide uppercase">
      <span className="mr-3">{article.category}</span>
      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3"></span>
      <span>{article.date}</span>
    </div>

    {/* Title */}
    <h3 className="text-xl md:text-4xl font-serif text-gray-900 mb-4 leading-snug">
      {article.title}
    </h3>

    {/* Read More Link */}
    <a
      href="#"
      className="inline-flex items-center text-lg my-4  text-gray-900 hover:text-orange-500 transition duration-300 group"
    >
      Read More
      <svg
        className="ml-2 w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform"
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
);

const WhatNew = () => {
  return (
    <section className=" md:py-14 bg-white px-4  ">
      <div className="max-w-full p-30  mx-15">
        <div className="mb-16">
          <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 flex items-center">
            <div className="w-10 h-px bg-gray-400 mr-2"></div>
            WHAT'S NEW
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-none inline-block relative">
            ARTICLES
            <span className="absolute bottom-[-10px] left-full ml-4 text-3xl font-serif italic text-orange-500 whitespace-nowrap hidden lg:inline">
              from our blog
            </span>
          </h2>
        </div>

        <div className="flex  justify-center items-center my-15 gap-15 md:gap-15">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="border-t border-orange-500 mt-16 mb-8"></div>

        <div className="flex justify-end">
          <a
            href="#"
            className="inline-flex items-center bg-transparent border border-gray-400 text-gray-900 py-3 px-6 rounded-lg text-sm font-semibold hover:bg-gray-100 transition duration-300"
          >
            View All
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
      </div>
    </section>
  );
};

export default WhatNew;
