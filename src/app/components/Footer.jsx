import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialIcons = [
    {
      name: "Facebook",
      src: "facebook.png",
      url: "",
    },
    {
      name: "Twitter",
      src: "x.png",
      url: "",
    },
    {
      name: "Instagram",
      src: "instagram.png",
      url: "",
    },
    {
      name: "Pinterest",
      src: "pinterest.png",
      url: "",
    },
  ];

  return (
    <footer className="w-full bg-[#1b1b1b] text-gray-400 font-sans">
      <div className="relative h-96 overflow-hidden">
        <img
          src="/vineyard.jpg"
          alt="Vineyard at sunset"
          className="absolute inset-0 w-full h-full object-cover brightness-[.4] z-0"
        />

        <div className="relative z-10 h-full max-w-[180vh] mx-auto flex justify-center items-center p-[40px] sm:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-6xl md:text-5xl text-white font-serif  mb-4">
                Stay Updated
              </h3>
              <p className="text-white text-lg text-opacity-80 max-w-md">
                Sign up for exclusive product launches, promotion and unique
                experiences.
              </p>
            </div>

            <div className="md:flex md:justify-end mt-6 md:mt-0 mr-[420px]">
              <form className="flex w-full md:max-w-md border-b border-white border-opacity-50">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-transparent text-white placeholder-gray-400 py-3 focus:outline-none"
                  aria-label="Your email address"
                />
                <button
                  type="submit"
                  className="flex items-center text-sm font-semibold text-white py-3 ml-4 hover:text-orange-500 transition duration-300"
                >
                  Subscribe
                  <svg
                    className="ml-2 w-4 h-4 text-orange-500"
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
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-16 md:py-24 px-4 sm:px-8">
        <img
          src="/footer-overlay.png"
          alt="Subtle background detail"
          className="absolute inset-0 w-full h-full object-cover opacity-[.15] z-0"
        />

        <div className="relative max-w-[180vh] mx-auto grid grid-cols-2 lg:grid-cols-5 gap-12 z-10">
          <div className="col-span-2 lg:col-span-1">
            <div className="w-10 h-10 bg-orange-500 mb-4 flex items-center justify-center text-white text-xl font-bold">
              OI
            </div>
            <p className="text-lg leading-relaxed">
              Crafted with passion, poured with purpose — celebrating flavor,
              community, and sustainability in every pint
            </p>
          </div>

          <div>
            <h4 className="text-base text-white font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-lg ${
                      link.name === "Home"
                        ? "text-orange-500"
                        : "hover:text-white"
                    } transition duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base text-white font-semibold mb-6">
              Office Address
            </h4>
            <address className="not-italic text-lg space-y-3">
              <p>Pune — 785 15th Street, Office 478</p>
              <p>Berlin, De 81566</p>
              <p className="mt-4 text-white">+1 800 555 25 69</p>
              <a
                href="mailto:support@oibrewing.com"
                className="text-orange-500 hover:text-white transition duration-200"
              >
                support@oibrewing.com
              </a>
            </address>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-base text-white font-semibold mb-6">
              Working Hours
            </h4>
            <div className="text-lg space-y-2">
              <p className="flex justify-between">
                <span>Mon–Fri:</span>
                <span className="text-white">9 AM – 6 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">9 AM – 4 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white ">closed</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base text-white font-semibold mb-6">
              Get In Touch
            </h4>
            <div className="flex items-center space-x-1 mt-4 md:mt-0 ">
              {socialIcons.map((social) => (
                <a
                  key={`footer-copy-${social.name}`}
                  href={social.url}
                  aria-label={social.name}
                  className="text-gray-500 transition duration-200"
                >
                  <img
                    src={social.src}
                    alt={`${social.name} Icon`}
                    className="w-10 h-10 border rounded-full hover:bg-orange-500 transition duration-200"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            Copyright &copy; {new Date().getFullYear()}{" "}
            <span className="text-orange-500">Oi Brewing Co.</span> All rights
            reserved.
          </p>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <span className="font-semibold text-gray-400 mr-2">Follow Us</span>
            {socialIcons.map((social) => (
              <a
                key={`footer-copy-${social.name}`}
                href={social.url}
                aria-label={social.name}
                className="text-gray-500 hover:text-white transition duration-200"
              >
                <img
                  src={social.src}
                  alt={`${social.name} Icon`}
                  className="w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
