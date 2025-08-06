import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const scope = useRef();
  const cardRef = useRef([]);


  useGSAP(() => {
    gsap.from(".project-title", {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 90%",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    
    gsap.from(".project-subtitle", {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 85%",
      },
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: scope.current,
        start: "top 80%",
        end:"bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, { scope });


  const handleMouseMove = (i) => (e) => {
    const card = cardRef.current[i];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <section
      ref={scope}
      id="project"
      className="px-6 md:px-20 w-full py-10 text-center border-t border-b border-white"
    >
      {/* Title */}
      <h1 className="project-title text-2xl md:text-4xl font-bold mt-10">
        Projects
      </h1>

      {/* Subtitle */}
      <p className="project-subtitle font-light text-gray-400 mb-10">
        Amazing and Wonderful Projects
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.map((project, i) => (
          <div
            key={i}
            ref={(el) => (cardRef.current[i] = el)}
            onMouseMove={handleMouseMove(i)}
            className="project-card card card-border rounded-xl p-6 text-white w-full relative overflow-hidden"
          >
            <div className="glow absolute inset-0 z-0" />
            <div className="relative">
              <h2 className="text-xl font-semibold mt-4 md:text-left">
                {project.name}
              </h2>

              <img
                src={project.photos}
                alt={project.name}
                className="mx-auto my-4 w-full max-w-md max-h-40 object-cover rounded-lg hover:-translate-y-2 transition-transform duration-300"
              />

              <p className="mt-2 text-sm text-gray-300">{project.Desc}</p>

              <div className="flex gap-4 mt-4 justify-center">
                <a
                  href={project.gitrepo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white text-black font-medium px-4 py-1.5 rounded-full shadow hover:scale-105 transition-transform duration-300"
                >
                  GitHub
                </a>
                {project.Livelink && (
                  <a
                    href={project.Livelink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white font-medium px-4 py-1.5 rounded-full shadow hover:bg-green-600 transition-colors duration-300"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
