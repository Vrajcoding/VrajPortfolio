import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern online store built with React and Stripe.",
    image: "https://via.placeholder.com/600x400?text=Project+1",
  },
  {
    title: "Portfolio Website",
    description: "Personal website showcasing my skills and projects.",
    image: "https://via.placeholder.com/600x400?text=Project+2",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog system using MERN stack.",
    image: "https://via.placeholder.com/600x400?text=Project+3",
  },
];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <Swiper
        modules={[Pagination,Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000}}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider

