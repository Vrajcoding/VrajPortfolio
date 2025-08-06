import React from 'react';
import Navbar from './components/FrontPages/Navbar';
import Particles from './components/Background/Particles';
import Name from './components/FrontPages/Name';
import Projects from './components/Projects/Projects';
import Project from './Constants/project';
import Skill from "./components/Skills/Skill"
import Skills from './Constants/skill';
import About from './components/About/About';

const App = () => {
  return (
    <div className="relative bg-black text-white">
     
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={50}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* ✅ Navbar + Name Section */}
      <section
        className="w-full h-screen flex flex-col items-center justify-center"
        id="home"
      >
        <Navbar />
        <Name />
      </section>

      {/* ✅ Projects Section (auto height) */}
      <section className="relative z-10 w-full py-10 bg-black" id="project">
        <Projects data={Project} />
      </section>
      
      <section className="relative z-10 w-full py-10 bg-black" id="skill">
        <Skill skills={Skills} />
      </section>

      <section className="relative z-10 w-full py-10 bg-black" id="about">
       <About />
      </section>
    </div>
  );
};

export default App;
