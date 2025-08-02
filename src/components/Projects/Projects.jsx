import React, { useRef } from "react";


const Projects = ({ data }) => {
  const cardRef = useRef([]);

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
<section className="px-6 md:px-20 w-full py-10 text-center">
  <h1 className="text-2xl md:text-4xl font-bold mt-10">Projects</h1>
  <p className="font-light text-gray-400 mb-10">
    Amazing and Wonderful Projects
  </p>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {data.map((project, i) => (
      <div
        key={i}
        ref={(el) => (cardRef.current[i] = el)}
        onMouseMove={handleMouseMove(i)}
        className="card card-border rounded-xl p-6 text-white w-full relative overflow-hidden"
      >
        <div className="glow" />
        <div className="relative">
        <h2 className="text-xl font-semibold mt-4 md:text-left">{project.name}</h2>
          <img
            src={project.photos}
            alt={project.name}
            className="my-4 w-full max-w-md max-h-40 object-cover rounded-lg"
          />
         
          <p className="mt-2 text-sm text-gray-300">{project.Desc}</p>

          <div className="flex gap-4 mt-4 justify-center">
            <a
              href={project.gitrepo}
              target="_blank"
              className="text-blue-400 underline"
              rel="noreferrer"
            >
              GitHub
            </a>
            {project.Livelink && (
              <a
                href={project.Livelink}
                target="_blank"
                className="text-green-400 underline"
                rel="noreferrer"
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
