import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import hoverSoundFile from '/public/sound/hoversound .mp3';

const Home: React.FC = () => {

  const titleRef = useRef<HTMLHeadingElement>(null); // Utilisation de gsap pour faire une animation de perspective au survol

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const element = titleRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10; 

    element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handleMouseLeave = () => {
    if (titleRef.current) {
      titleRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

return (
  <div className="min-h-screen flex items-center bg-black p-6">
    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center">

      {/* Partie gauche */}
      <div className="lg:ml-20">
        <h1
          ref={titleRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="text-5xl lg:text-[8rem] font-light text-white mb-12 lg:mb-20"
        >
          VICTOR KURT
        </h1>

        <div className="space-y-6 lg:space-y-10 flex flex-col">
          <Link
            to="/parcours"
            className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
            onMouseEnter={() => {
              const sound = new Audio(hoverSoundFile);
              sound.currentTime = 0;
              sound.play();
            }}
          >
            Mon parcours
          </Link>

          <Link
            to="/atouts"
            className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
            onMouseEnter={() => {
              const sound = new Audio(hoverSoundFile);
              sound.currentTime = 0;
              sound.play();
            }}
          >
            Mes Atouts
          </Link>

          <Link
            to="/projets"
            className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
            onMouseEnter={() => {
              const sound = new Audio(hoverSoundFile);
              sound.currentTime = 0;
              sound.play();
            }}
          >
            Mes Projets
          </Link>

          <Link
            to="/contact"
            className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
            onMouseEnter={() => {
              const sound = new Audio(hoverSoundFile);
              sound.currentTime = 0;
              sound.play();
            }}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Image à droite */}
      <img
        src="/pictures/punk.jpg"
        alt="victor"
        className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-lg mt-12 lg:mt-0"
      />
    </div>
  </div>
);
};

export default Home;