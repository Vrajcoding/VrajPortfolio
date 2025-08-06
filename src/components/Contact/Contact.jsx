import React, { useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons (using react-icons)
import { FaReact, FaNodeJs } from "react-icons/fa";
import { 
  SiExpress, 
  SiMongodb,  
  SiTailwindcss,
  SiRedux,
  SiTypescript
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const scope = useRef();
  const categoryRefs = useRef([]);

  // Animation setup
  useGSAP(() => {
    gsap.from(".skills-title", {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

   
    categoryRefs.current.forEach((category, i) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: category,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "back.out"
      });
    });

    
    gsap.to(".skill-item", {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
      duration: 0.3,
      ease: "power1.out",
      paused: true,
    });
  }, { scope });


  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" />, level: 95 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
        { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 85 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" />, level: 90 }
      ],
      color: "from-cyan-500/10 to-cyan-900/10"
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 90 },
        { name: "Express", icon: <SiExpress />, level: 85 },
      ],
      color: "from-green-500/10 to-green-900/10"
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 85 },
      ],
      color: "from-emerald-500/10 to-emerald-900/10"
    },
  ];

  return (
    <section 
      ref={scope} 
      id="skills" 
      className="px-6 md:px-20 py-20 w-full max-w-7xl mx-auto"
    >
      <h2 className="skills-title text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="text-blue-500">Skills</span>
      </h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Technologies I work with daily and continue to master
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={categoryIndex}
            ref={el => categoryRefs.current[categoryIndex] = el}
            className={`p-6 rounded-xl bg-gradient-to-br ${category.color} border border-gray-700/50 backdrop-blur-sm`}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {category.name}
            </h3>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item bg-gray-800/50 p-4 rounded-lg border border-gray-700 cursor-default"
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * skillIndex }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Tech Stack */}
      <div className="mt-16 text-center">
        <h4 className="text-xl font-medium mb-6">Also experienced with:</h4>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {['JavaScript', 'HTML5', 'CSS3', 'SASS', 'Jest', 'Webpack', 'Firebase', 'JWT', 'OAuth', 'WebSockets'].map((tech, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 bg-gray-800/50 rounded-full text-sm border border-gray-700"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;