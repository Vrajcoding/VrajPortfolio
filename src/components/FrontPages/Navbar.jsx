import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import navlink from "../../Constants/navbarlink";

const Navbar = () => {
  const navRef = useRef();

  useGSAP(
    () => {
      gsap.from(".name", { opacity: 0, y: -100, duration: 1 });
      gsap.from(".nav-link", {
        opacity: 0,
        y: -100,
        duration: 1,
        stagger: 0.2,
      });
      gsap.from(".contact", { opacity: 0, y: -100, duration: 1 });
    },
    { scope: navRef } 
  );

  return (
    <header
      ref={navRef}
      className="navbar fixed top-0 w-full text-white flex justify-between items-center bg-black z-[999]"
    >
      {/* Name */}
      <div className="name p-5">
        <a href="#home" className="text-lg md:text-2xl">
          Vraj
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {navlink.map((nav, idx) => (
            <li key={idx} className="nav-link flex flex-col group">
              <a href={nav.href} className="relative">
                {nav.link}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <div className="p-5 contact">
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
