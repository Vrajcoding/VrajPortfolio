import React from "react";
import { motion } from "motion/react";

const Skill = ({ skills }) => {
  return (
    <section className="px-6 md:px-20 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mt-10">Skills</h1>
      <p className="font-light text-gray-400 mb-10">
        Tools and Technologies I Use
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-xl bg-black border-2 border-gray-700 shadow-md hover:shadow-xl transition"
          >
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
            <p className="relative z-10 mt-4 font-semibold text-white">
              {skill.name}
            </p>

            {/* Name (optional) */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
