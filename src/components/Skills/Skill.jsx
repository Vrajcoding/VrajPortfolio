import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = ({ skills }) => {
  const scope = useRef();
  const cardRefs = useRef([]);
  const containerRef = useRef();

  useGSAP(() => {
    // Responsive animation adjustments
    const isMobile = window.innerWidth < 768;
    const cardStagger = isMobile ? 0.05 : 0.1;
    const cardStart = isMobile ? "top 80%" : "top 85%";
    const titleStart = isMobile ? "top 85%" : "top 90%";

    // Title animation with responsive settings
    gsap.from(".skill-title", {
      scrollTrigger: {
        trigger: scope.current,
        start: titleStart,
        toggleActions: "play none none reverse",
        markers: false, // Enable for debugging
      },
      y: isMobile ? -30 : -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Description animation with responsive settings
    gsap.from(".skill-para", {
      scrollTrigger: {
        trigger: scope.current,
        start: titleStart,
        toggleActions: "play none none reverse",
      },
      y: isMobile ? -20 : -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    // Cards animation with responsive stagger and start position
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      
      gsap.from(card, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: cardStart,
          toggleActions: "play none none reverse",
        },
        y: isMobile ? 30 : 50,
        opacity: 0,
        duration: 0.8,
        delay: i * cardStagger,
        ease: "power2.out",
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { scope });

  return (
    <section ref={scope} className="px-6 md:px-20 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mt-10 skill-title">Skills</h1>
      <p className="font-light text-gray-400 mb-10 skill-para">
        Tools and Technologies I Use
      </p>

      <div ref={containerRef} className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)} 
            className="relative p-6 rounded-xl bg-black border-2 border-gray-700 shadow-md hover:shadow-xl transition"
          >
            {/* Glow BG */}
            <div
              className={`absolute top-0 left-0 w-full h-full rounded-xl ${skill.blurColor} blur-2xl opacity-30 z-0`}
            ></div>

            {/* Icon */}
            <div className="relative z-10 flex justify-center items-center h-24">
              <motion.img
                src={skill.image}
                alt={skill.name}
                className="max-h-20 object-contain"
                drag
                dragDirectionLock
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              />
            </div>

            {/* Name */}
            <p className="relative z-10 mt-4 font-semibold text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;