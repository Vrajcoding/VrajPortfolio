import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import Skillslider from "./Skillslider";


gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth < 768;
const About = () => {
  const scope = useRef();
  const card = useRef();

 
  useGSAP(() => {
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 70%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".cube-face", {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 70%",
      },
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "back.out",
    });

    gsap.from(".Skill-show", {
      scrollTrigger:{
        trigger:card.current,
        start:"top 70%",
      },
      opacity:0,
      x:100,
      duration:1,
      ease:"back.out"
    })
  }, { scope });

  return (
    <section
      ref={scope}
      id="about"
      className="px-6 md:px-20 py-20 w-full max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="about-text">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm <strong className="text-white">Vraj Gajjar</strong>, a passionate <strong>MERN Stack Developer</strong> with expertise in building full-stack web applications. I specialize in creating efficient, scalable solutions with modern technologies.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">My Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              <TechBadge icon={<SiMongodb className="text-2xl text-green-600" />} name="MongoDB" />
              <TechBadge icon={<SiExpress className="text-2xl text-gray-400" />} name="Express" />
              <TechBadge icon={<FaNodeJs className="text-2xl text-green-500" />} name="Node.js" />
              <TechBadge icon={<FaReact className="text-2xl text-cyan-400" />} name="React" />
            </div>
          </div>

          <motion.p 
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500 italic"
          >
            "I don't just write code - I solve problems through clean architecture and intuitive user experiences."
          </motion.p>
        </div>
        <div className="Skill-show overflow-hidden" ref={card}>
        <Skillslider />
      </div>
      </div>
      
    </section>
  );
};


const TechBadge = ({ icon, name }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700"
  >
    {icon}
    <span>{name}</span>
  </motion.div>
);



export default About;