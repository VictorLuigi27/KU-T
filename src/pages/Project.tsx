
const projects = [
  { 
    id: 1, 
    title: "PØrnØgr@ph!e", 
    tagline: "Si la foule t’intimide, c’est peut-être parce que tu es destiné à monter sur scène.",
    image: "/pictures/projet1.jpg",
    link: "https://monsite.com" 
  },
  { 
    id: 2, 
    title: "Projet 2", 
    tagline: "Un ancien portfolio, plus personnel, porté par la musique classique.",
    image: "/pictures/projet2.jpg",
    link: "https://victor-rosy.vercel.app/" 
  },
  { 
    id: 3, 
    title: "Projet 3", 
    tagline: "En cours ...",
    image: "/pictures/projet1.jpg",
    link: "https://example.com" 
  },
];

export default function ProjectGallery() {
  return (
    <div className="min-h-screen p-10 flex flex-col items-center justify-center gap-16">
      <h1 className="text-5xl lg:text-7xl text-white mb-16 text-center">
        PROJECTS
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-72 lg:w-100 lg:h-90 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition transform"
            style={{ backgroundColor: '#242423' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 lg:h-50 object-cover"
            />
            <div className="p-6 text-white text-center">
              <h2 className="font-bold text-2xl lg:text-2xl">{project.title}</h2>
              <p className="text-lg lg:text-xl opacity-80 mt-2">{project.tagline}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}