import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const blocs = gsap.utils.toArray<HTMLElement>(".bloc p");

    blocs.forEach((bloc) => {
      gsap.fromTo(
        bloc,
        { y: 20, autoAlpha: 0 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          scale: 1.1,
          scrollTrigger: {
            trigger: bloc,
            markers: false,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none reverse none",
            scrub: 0.5,
          },
        }
      );
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-2xl lg:text-5xl flex items-center justify-center mt-15 lg:mt-60 lg:mb-50">
        ABOUT ME
      </h1>

      <div className="bloc b1 min-h-screen bg-black p-8 lg:p-20">
        <p className="text-base lg:text-lg text-left leading-relaxed">
          Je m’appelle Victor, développeur web spécialisé en front-end, avec une expérience en back-end. 
          Cette double compétence me permet d’être polyvalent, autonome et d’avoir une vision globale des projets, 
          de l’interface utilisateur jusqu’à la logique métier.
        </p>
      </div>

      <div className="bloc b1 min-h-screen bg-black p-8 lg:p-20">
        <p className="text-base lg:text-lg text-left leading-relaxed">
          Je m’appelle Victor, développeur web spécialisé en front-end, avec une expérience en back-end. 
          Cette double compétence me permet d’être polyvalent, autonome et d’avoir une vision globale des projets, 
          de l’interface utilisateur jusqu’à la logique métier.
        </p>
      </div>

      <div className="bloc b1 min-h-screen bg-black p-8 lg:p-20">
        <p className="text-base lg:text-lg text-left leading-relaxed">
          Je m’appelle Victor, développeur web spécialisé en front-end, avec une expérience en back-end. 
          Cette double compétence me permet d’être polyvalent, autonome et d’avoir une vision globale des projets, 
          de l’interface utilisateur jusqu’à la logique métier.
        </p>
      </div>
    </div>
  );
}