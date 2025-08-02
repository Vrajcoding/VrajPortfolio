import React, { useRef } from 'react'

const Projects = ({index}) => {
  const cardRef = useRef([]);

  const handleMouseMove = (index) => (e) => {
      const  card = cardRef.current[index];
      if(!card)  return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY,mouseX) * (180 / Math.PI)
      angle = (angle + 360) % 360
      card.style.setProperty('--start', angle + 60);

  }
  return (
    <div ref={(el) => (cardRef.current[index] = el)} onMouseMove={handleMouseMove(index)}
    className="card card-border rounded-xl p-10 text-white max-w-md mx-auto mt-10">
      <div className="glow" />
      
    </div>
  )
}

export default Projects