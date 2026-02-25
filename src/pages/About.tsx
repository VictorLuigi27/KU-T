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
      { y: 10, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        scale: 1.1,
        duration: 1,
        scrollTrigger: {
          trigger: bloc,
          start: "top 70%",
          end: "bottom 15%",
          scrub: 0.5,
        },
      }
    );
  });
    
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <h1 className="text-3xl lg:text-9xl flex items-center justify-center mt-20 mb-20 lg:mt-70 lg:mb-90">
        ABOUT ME
      </h1>

      <div className="bloc b1 min-h-[60vh] bg-black p-8 lg:p-20">
        <p className="text-base lg:text-lg text-left leading-relaxed">
          Je m’appelle Victor, développeur web spécialisé en front-end, avec une expérience en back-end. 
          Cette double compétence me permet d’être polyvalent, autonome et d’avoir une vision globale des projets, 
          de l’interface utilisateur jusqu’à la logique métier.
        </p>
      </div>

      <div className="bloc b1 min-h-[60vh] bg-black p-8 lg:p-20 mt-30">
        <p className="text-base lg:text-lg text-left leading-relaxed">
          Mon esprit est très créatif et orienté solution. Je propose régulièrement des idées de fonctionnalités et d’améliorations en pensant à l’ensemble du parcours utilisateur. 
          Je considère que le design ne se limite pas à l’apparence, mais qu’il influence profondément le comportement et l’émotion.
        </p>
      </div>

      <div className="bloc b1 min-h-[60vh] bg-black flex flex-col items-center justify-center p-8 lg:p-20 mt-30">
        <div className="max-w-3xl space-y-6 lg:space-y-10 text-left">
            <p className="text-base lg:text-lg leading-relaxed">
            Je suis constamment en quête d’évolution, aussi bien sur le plan technique que personnel. 
            Je cherche à développer toutes les compétences qui peuvent me permettre de progresser et d’avoir une vision toujours plus complète et performante de mon métier.
            </p>
        </div>

        <div className="bloc b1 min-h-[60vh] bg-black flex flex-col items-center justify-center p-8 lg:p-20 mt-30 lg:mt-90">
        <div className="max-w-3xl space-y-6 lg:space-y-10 text-left">
            <p className="text-base lg:text-lg leading-relaxed">
            Lors de mes expériences précédentes, mon investissement et la qualité de mon travail ont été reconnus par plusieurs primes. 
            Mon engagement a toujours été naturel : je m’implique pleinement dans les projets et je cherche constamment à apporter une réelle valeur à l’entreprise.
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}
