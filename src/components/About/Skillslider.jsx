import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import sliders from '../../Constants/aboutSkill';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SkillSlider = () => {
  const renderIcon = (iconName, color, size = 70) => {
    switch (iconName) {
      case 'SiMongodb': return <SiMongodb color={color} size={size} />;
      case 'SiExpress': return <SiExpress color={color} size={size} />;
      case 'FaReact': return <FaReact color={color} size={size} />;
      case 'FaNodeJs': return <FaNodeJs color={color} size={size} />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full max-w-5xl h-[500px] mx-auto rounded-xl overflow-hidden group">

      
  
       <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent z-10 pointer-events-none" /> 
      
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/80 hover:bg-white',
        }}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false 
        }}
        className="w-full h-full"
      >
        {sliders.map((skill, index) => (
          <SwiperSlide key={index}>
            <div 
              className="flex flex-col items-center justify-center h-full p-8 relative"
              style={{ backgroundColor: skill.backgroundColor }}
            >
              <div className="relative z-20 text-center space-y-6">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {renderIcon(skill.icon, skill.color)}
                </div>
                <h3 
                  className="text-4xl font-bold tracking-tight drop-shadow-md"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </h3>
                {skill.description && (
                  <p className="max-w-md mx-auto text-white/90 text-lg">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillSlider;