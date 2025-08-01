import React from 'react';
import Slider from './components/Slider';
import Navbar from './components/FrontPages/Navbar';
import Particles from './components/Background/Particles';
import Name from './components/FrontPages/Name';

const App = () => {
  return (
    <>
      <div className="bg-black h-screen w-full fixed z-0">
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
       {/* this is a navbar and name part */}
      <div className="absolute z-10 w-full h-screen flex flex-col items-center justify-center">
        <Navbar />
        <Name />
      </div>
    </>
  );
};

export default App;
