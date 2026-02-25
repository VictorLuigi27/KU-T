import React, { useRef } from "react";
import { Link } from "react-router-dom";
import hoverSoundFile from "/sound/hoversound .mp3";
import About from "./About";

const Home: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const hoverSound = useRef<HTMLAudioElement | null>(null);

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

  const playHoverSound = () => {
    if (!hoverSound.current) {
      hoverSound.current = new Audio(hoverSoundFile);
    }
    hoverSound.current.currentTime = 0;
    hoverSound.current.play();
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white p-6">

      
      <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-20">

        
        <div className="flex flex-col items-start lg:mr-10">
          <h1
            ref={titleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="text-5xl lg:text-[8rem] lg:mt-25 font-light mb-12 transition-transform duration-200"
          >
            VICTOR KURT
          </h1>

          <div className="space-y-6 flex flex-col mb-12 lg:mt-10">
            <Link
              to="/about"
              onMouseEnter={playHoverSound}
              className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-all duration-300"
            >
              About
            </Link>

            <Link
              to="/projets"
              onMouseEnter={playHoverSound}
              className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-all duration-300"
            >
              Project
            </Link>

            <Link
              to="/contact"
              onMouseEnter={playHoverSound}
              className="text-2xl lg:text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Image à droite en desktop seulement */}
        <img
          src="/pictures/punk.jpg"
          alt="victor"
          className="w-64 h-64 lg:w-80 lg:h-80 object-cover mt-10 lg:mt-55"
        />
      </section>

      {/* About section */}
      <section>
        <About />
      </section>

    </div>
  );
};

export default Home;