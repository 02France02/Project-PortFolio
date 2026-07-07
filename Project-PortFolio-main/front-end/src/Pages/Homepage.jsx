import homeVideoPortf from "../assets/homeVideoFra.mp4";
import homeVideoMobile from "../assets/homeVideoMoboile.mp4";
import code_video from "../assets/code_video.mp4";
import react_img from "../assets/react.jpg";
import js_img from "../assets/js.png";
import node_img from "../assets/node.png";
import project_img from "../assets/project.jpg";
import Button from "../Components/Button";
import BugHunt from "../Components/BugHunt";
import LazyVideo from "../Components/LazyVideo";

const technologies = [
  {
    title: "REACT per interfacce utente dinamiche e interattive",
    text: "Sviluppo siti web moderni e veloci grazie alla libreria React di JavaScript.",
    img: react_img,
    alt: "React",
    aos: "fade-right",
  },
  {
    title: "JAVASCRIPT per la logica e la dinamicità",
    text: "Sviluppo siti web ricchi di interattività e funzioni avanzate usando JavaScript.",
    img: js_img,
    alt: "JavaScript",
    aos: "fade-left",
  },
  {
    title: "NODE.JS per back-end scalabili e performanti",
    text: "Sviluppo applicazioni web scalabili e ad alte prestazioni con Node.js.",
    img: node_img,
    alt: "Node.js",
    aos: "fade-right",
  },
];

const Homepage = () => {
  return (
    <div>
      {/* Video hero */}
      <div>
        <video
          src={homeVideoPortf}
          className="w-full max-xs:hidden"
          autoPlay
          loop
          playsInline
          muted
        ></video>
        <video
          src={homeVideoMobile}
          className="w-full xs:hidden"
          autoPlay
          loop
          playsInline
          muted
        ></video>
      </div>

      {/* Info Section */}
      <div
        className="relative flex items-center justify-center"
        data-aos="fade-up"
      >
        <div className="image_home1 absolute inset-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-5 rounded-lg bg-opacity-60 p-[6%] text-center">
          <h2 className="text-2xl font-extrabold max-xs:text-lg">
            Trasformo le TUE idee in Prodotti Digitali!
          </h2>
          <p className="text-sm">
            Sviluppo siti e app web su misura che rispecchiano le tue ambizioni
          </p>
          <div className="flex justify-center gap-7 max-xs:flex-wrap">
            <Button text="Crea Il Tuo Sito!" path="/service" />
            <Button text="Contattami" path="/contact" />
          </div>
        </div>
      </div>

      {/* Tecnologie */}
      <div
        className="video_tech relative flex justify-center overflow-x-hidden p-[7%]"
        data-aos="fade-up"
      >
        <LazyVideo
          src={code_video}
          className="absolute inset-0 z-0 h-full w-full object-cover blur-sm"
        />
        <div className="absolute inset-0 z-[1] bg-gray-900/40"></div>
        <div className="z-10">
          <div className="flex justify-center">
            <h1 className="text-xl font-extrabold text-white sm:text-2xl">
              PRINCIPALI TECNOLOGIE
            </h1>
          </div>

          {technologies.map((tech) => (
            <div
              key={tech.alt}
              className="z-10 mt-10 flex w-full flex-wrap justify-center"
              data-aos={tech.aos}
            >
              <div className="mb-4 w-full md:mb-0 md:w-1/2">
                <h2 className="font-extrabold text-white sm:text-xl">
                  {tech.title}
                </h2>
                <p className="mt-2 w-[70%] text-xs text-gray-300 max-md:w-full">
                  {tech.text}
                </p>
              </div>
              <div className="relative h-48 w-full overflow-hidden rounded-lg sm:h-64 md:w-[40%] lg:order-last lg:h-full">
                <img
                  src={tech.img}
                  alt={tech.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini-gioco */}
      <div
        className="relative flex flex-col items-center justify-center gap-6 bg-gray-950 px-4 py-16"
        data-aos="fade-up"
      >
        <h2 className="text-center text-xl font-extrabold text-white sm:text-2xl">
          PAUSA CAFFÈ? ☕
        </h2>
        <p className="text-center text-sm text-gray-400">
          Mettiti alla prova con un piccolo gioco da sviluppatore!
        </p>
        <BugHunt />
      </div>

      {/* Progetti */}
      <div
        className="video_tech relative flex justify-center p-[7%]"
        data-aos="fade-up"
      >
        <img
          src={project_img}
          alt="Progetti"
          loading="lazy"
          className="absolute inset-0 z-0 h-full w-full object-cover blur-[2px]"
        />
        <div className="z-10 text-center">
          <h1 className="mb-10 text-3xl font-extrabold text-white sm:text-4xl">
            ECCO QUALCHE MIO PROGETTO!
          </h1>
          <Button text="Progetti" path="/projects" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
