import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start p-8 bg-black">
      <div className="ml-20">
        <h1 className="text-[8rem] font-light text-white mb-20">
          Victor Kurt
        </h1>

        <div className="space-y-10 flex flex-col">
          <Link to="/parcours" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300">
            Mon parcours
          </Link>

          <Link to="/atouts" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300">
            Mes Atouts
          </Link>

          <Link to="/projets" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300">
            Mes Projets
          </Link>

          <Link to="/contact" className="text-4xl text-gray-300 hover:text-white hover:translate-x-5 transition-transform duration-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;