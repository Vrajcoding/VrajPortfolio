import React from "react";
import navlink from "../../Constants/navbarlink";
import Particles from "../Background/Particles";

const Navbar = () => {
  return (
    <header className="navbar fixed top-0 w-full text-white flex justify-between items-center">
      {/* Name part */}
      <div className="name p-3">
        <a href="#home" className="text-lg md:text-2xl">
          Vraj
        </a>
      </div>
      

      {/* Link parts */}
      <div className="desktop hidden md:block">
        <nav>
          <ul className="flex gap-8">
            {navlink.map((nav, idx) => (
              <li key={idx} className="flex flex-col group">
                <a href={nav.href} className="relative">
                  {nav.link}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Contact button */}
      <div className="p-3">
        <a
          href="#contact"
          className="px-7 py-2 rounded-md bg-white text-black shadow-md hover:shadow-lg focus:scale-110 transition-transform duration-100 ease-in-out font-bold"
          aria-label="Contact"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Navbar;
