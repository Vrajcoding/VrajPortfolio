import React from 'react';
import Navbar from './components/FrontPages/Navbar';
import Particles from './components/Background/Particles';
import Name from './components/FrontPages/Name';
import Projects from './components/Projects/Projects';

const App = () => {
  const index = 0;
  return (
    <>
   <div className="relative bg-black ">
  {/* 🔴 Particle Background (stays fixed) */}
  <div className="absolute w-full h-screen z-0">
    <Particles 
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.10}
      particleBaseSize={50}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  {/* ✅ Navbar + Name (fullscreen content on top) */}
  <section className="w-full h-screen flex flex-col items-center justify-center" id="home">
    <Navbar />
    <Name />
  </section>


  <section className="w-full bg-black h-screen" id='project'>
    <Projects index={index}/>
  </section>
</div>


    </>
  );
};

export default App;
