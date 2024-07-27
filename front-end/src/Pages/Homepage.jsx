import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import homeVideoPortf from "../assets/homeVideoFra.mp4";
import homeVideoMobile from "../assets/homeVideoMoboile.mp4";
import code_video from "../assets/code_video.mp4";
import react_img from "../assets/react.jpg";
import js_img from "../assets/js.png";
import node_img from "../assets/node.png";
import project_img from "../assets/project.jpg";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durata delle animazioni in millisecondi
      once: true, // Le animazioni si verificano solo una volta
      offset: 100, // Offset dal viewport per iniziare l'animazione
    });
  }, []);

  return (
    <>
      <div>
        {/* Video Sections */}
        <div>
          <video
            src={homeVideoPortf}
            className="max-xs:hidden w-full"
            autoPlay
            loop
            playsInline
            muted
          ></video>
          <video
            src={homeVideoMobile}
            className="xs:hidden"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>

        {/* Info Sections */}
        <div className="relative flex items-center justify-center" data-aos="fade-up">
          <div className="absolute inset-0 image_home1"></div>
          <div className="relative z-10 bg-opacity-60 p-[6%] rounded-lg text-center flex flex-col items-center gap-5">
            <h2 className="font-extrabold text-2xl max-xs:text-lg">
              Trasformo le TUE idee in Prodotti Digitali!
            </h2>
            <p className="text-sm">
              Sviluppo siti e app web su misura che rispecchiano le tue ambizioni
            </p>
            <div className="flex gap-7 max-xs:flex-wrap justify-center">
              <Button text="Crea Il Tuo Sito!" path="/service" />
              <Button text="Contattami" path="/contact" />
            </div>
          </div>
        </div>

        {/* Info tecnology */}
        <div className="video_tech relative flex justify-center p-[7%]" data-aos="fade-up">
          <video
            src={code_video}
            className="z-0 absolute inset-0 w-full h-full object-cover blur-sm"
            autoPlay
            loop
            muted
          />
          <div className="z-10">
            <div className="flex justify-center">
              <h1 className="text-xl font-extrabold text-white sm:text-2xl">
                PRINCIPALI TECNOLOGIE
              </h1>
            </div>
            {/* Start 3 div */}

            {/* react */}
            <div className="z-10 w-full mt-10 flex flex-wrap justify-center" data-aos="fade-right">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h1 className="font-extrabold text-white sm:text-xl">
                  REACT per interfacce utente dinamiche e interattive
                </h1>
                <p className="mt-2 w-[70%] text-xs text-gray-300">
                  Sviluppo siti web moderni e veloci grazie alla libreria React
                  di JavaScript.
                </p>
              </div>
              <div className="w-full md:w-[40%] relative h-48 overflow-hidden rounded-lg sm:h-64 lg:order-last lg:h-full">
                <img src={react_img} alt="react" />
              </div>
            </div>

            {/* js */}
            <div className="z-10 w-full mt-10 flex flex-wrap justify-center" data-aos="fade-left">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h1 className="font-extrabold text-white sm:text-xl">
                  JAVASCRIPT per la Logica e Dinamicità
                </h1>
                <p className="mt-2 w-[70%] text-xs text-gray-300">
                  Sviluppo siti web ricchi di interattività e funzioni avanzate
                  usando JavaScript.
                </p>
              </div>
              <div className="w-full md:w-[40%] relative h-48 overflow-hidden rounded-lg sm:h-64 lg:order-last lg:h-full">
                <img src={js_img} alt="js" />
              </div>
            </div>

            {/* node */}
            <div className="z-10 w-full mt-10 flex flex-wrap justify-center" data-aos="fade-right">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h1 className="font-extrabold text-white sm:text-xl">
                  NODE.js per interfacce utente dinamiche e interattive
                </h1>
                <p className="mt-2 w-[70%] text-xs text-gray-300">
                  Sviluppo applicazioni web scalabili e ad alte prestazioni con
                  Node.js.
                </p>
              </div>
              <div className="w-full md:w-[40%] relative h-48 overflow-hidden rounded-lg sm:h-64 lg:order-last lg:h-full">
                <img src={node_img} alt="node" />
              </div>
            </div>
          </div>
        </div>

        {/* Project info */}
        <div className="video_tech relative flex justify-center p-[7%]" data-aos="fade-up">
          <img
            src={project_img}
            className="z-0 absolute inset-0 w-full h-full object-cover blur-[2px]"
          />
          <div className="z-10">
            <h1 className="mb-10 text-3xl font-extrabold text-white sm:text-4xl">
              ECCO QUALCHE MIO PROGETTO!
            </h1>
            <Button text="Progetti" path="/projects" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
