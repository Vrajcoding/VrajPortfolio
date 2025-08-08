import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TypeAnimation } from 'react-type-animation';

const Name = () => {
  const scope = useRef();

  useGSAP(() => {
    gsap.from('.heading', { y: -50, opacity: 0, duration: 1 });
    gsap.from('.typing', { y: 30, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('.explore-btn', {
      scale: 0.5,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 1,
    });
  }, { scope });

  return (
    <div
      ref={scope}
      className="text-white flex flex-col items-center justify-center text-center px-4 h-screen"
    >
      {/* Heading */}
      <h1 className="heading text-3xl md:text-5xl mb-5">Hi, I am Vraj Gajjar</h1>

      {/* Typing Animation */}
      <p className="typing text-xl md:text-2xl font-bold leading-snug text-gray-400">
        Building performant full-stack
        <br />
        apps with{' '}
        <TypeAnimation
          sequence={[
            'MongoDB', 1500,
            'Express.js', 1500,
            'React', 1500,
            'Node.js', 1500,
          ]}
          wrapper="span"
          speed={20}
          cursor={true}
          className="text-indigo-400"
          repeat={Infinity}
        />
      </p>

      {/* Contact Button */}
      <a href="#about" className="explore-btn mt-6 px-6 py-2 bg-white text-black rounded-md shadow-md font-bold">
  Explore More ↓
</a>
    </div>
  );
};

export default Name;
