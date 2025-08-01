import { TypeAnimation } from 'react-type-animation';

const Name = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center text-center px-4 h-screen">
        {/* This is a Heading */}
     <h1 className='text-3xl md:text-5xl text-white mb-5'>Hi, I am Vraj Gajjar</h1>

     {/* typing animation */}
      <p className="text-xl md:text-2xl font-bold leading-snug text-gray-400">
        Building performant full-stack
        <br /> apps with{' '}
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
      {/* contact part */}
      <a
        className="mt-6 px-6 py-2 bg-white focus:scale-110 text-black rounded-md shadow-md transition duration-300 font-bold cursor-pointer"
        href='#project'
      >
        Explore More ↓
      </a>
      
    </div>
  );
};

export default Name;
