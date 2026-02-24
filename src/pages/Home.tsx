import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start p-8 bg-black">
        <div className='ml-20'>
                <h1 className="text-[8rem] font-light text-white mb-20">
                    Victor Kurt
                </h1>

            <div className='space-y-10'>
                <p className="text-4xl text-gray-300">
                    Mon parcours
                </p>

                <p className="text-4xl text-gray-300">
                    Mes Atouts
                </p>

                <p className="text-4xl text-gray-300">
                    Mes Projets
                </p>

                <p className="text-4xl text-gray-300">
                    Contact
                </p>
            </div>
        </div>
    </div>
  );
};

export default Home;