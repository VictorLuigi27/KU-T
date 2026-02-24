import React from 'react';
import { Link } from 'react-router-dom';
import hoverSoundFile from '/public/sound/soundbutton.mp3';

const hoverSound = new Audio(hoverSoundFile);

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start p-8 bg-black">
      <div className="ml-20">
        <h1 className="text-[8rem] font-light text-white mb-20">
          VICTOR KURT
        </h1>

        <div className="space-y-10 flex flex-col">
          <Link to="/parcours" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
          onMouseEnter={() => hoverSound.play()}
          >
            Mon parcours
          </Link>

          <Link to="/atouts" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
          onMouseEnter={() => hoverSound.play()}
          >
            Mes Atouts
          </Link>

          <Link to="/projets" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
          onMouseEnter={() => hoverSound.play()}
          >
            Mes Projets
          </Link>

          <Link to="/contact" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300 self-start"
          onMouseEnter={() => hoverSound.play()}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;