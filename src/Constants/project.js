import askedPhoto from '../assets/Photos/asked-photos.png';
import planetsPhoto from '../assets/Photos/Planets.png';
import weatherPhoto from '../assets/Photos/weather-app.png';
const Projects = [
  {
    name: "AskEds",
    Desc: "An interactive 3D sphere built using Three.js, with smooth camera controls and animated transitions using GSAP. Users can rotate the globe and change its color dynamically by clicking and dragging across the screen. Features include:",
    gitrepo: "https://github.com/Vrajcoding/papers", 
    Livelink: "https://askeds.onrender.com",
    photos: askedPhoto
  },
  {
    name: "Planets",
    Desc: "An interactive 3D sphere built using Three.js, with smooth camera controls and animated transitions using GSAP. Users can rotate the globe and change its color dynamically by clicking and dragging across the screen. Features include:",
    gitrepo: "https://github.com/Vrajcoding/Planet/tree/main/my-threejs-app",
    photos: planetsPhoto
  },
  {
    name: "Weather-App",
    Desc: "This project is a sleek, responsive weather forecasting app that allows users to search for any city and instantly view the latest weather conditions using the WeatherAPI. Designed for both desktop and mobile screens, it presents weather data in a clean, user-friendly layout with icon-based visual feedback.",
    gitrepo: "https://github.com/Vrajcoding/weather-apps",
    photos: weatherPhoto
  }
];

export default Projects;
