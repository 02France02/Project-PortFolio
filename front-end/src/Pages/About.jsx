import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../Components/Button";
import code_video from "../assets/code_video.mp4";

import io from "../assets/io.png";
import { Link } from "react-router-dom";
const About = () => {
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
        <div className="relative py-16 px-8 sm:px-16 flex flex-col sm:flex-row items-center sm:items-center sm:justify-center">
          <video
            src={code_video}
            className="z-0 absolute inset-0 w-full h-full object-cover blur-sm"
            autoPlay
            loop
            muted
          ></video>
          <div
            className="z-10 sm:w-1/2 flex justify-center  w-full  mb-8 sm:mb-0"
            data-aos="fade-right"
          >
            <img
              src={io}
              alt="io"
              className="w-[70%] sm:w-[70%] max-w-lg h-auto rounded-[80px] object-cover"
            />
          </div>
          <div
            className="z-10 w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left"
            data-aos="fade-left"
          >
            <h2 className="my-4 font-bold text-3xl text-white sm:text-4xl">
              CHI E' <span className="text-[#EF6B5E] underline">FRA&TECH</span>?
            </h2>
            <p className="text-white text-xs leading-8">
              Ciao, sono Francesco. Benvenuti nel mio sito portafoglio.
              <br />
              Sono uno Junior Front-End Developer con competenze anche nel
              Back-End. Ho studiato e lavorato con una varietà di tecnologie.
              Per il
              <b> Front-End</b> utilizzo <b> HTML</b>, <b> CSS</b>,
              <b> JavaScript</b>, <b> React</b>, <b> Tailwind CSS</b>. Per il
              <b>Back-End</b> ho studiato <b> Node.JS</b> e database relazionali
              come
              <b>PostgreSQL</b> e non relazionali come <b>MongoDB</b>. <br />
              Sono una persona dinamica e appassionata del mondo informatico,
              sia per quanto riguarda l'hardware che il software. Mi piace
              continuamente apprendere e migliorare le mie competenze. Ho
              ottenuto una certificazione in sviluppo web da Develhope, e la mia
              missione è trasformare idee in soluzioni tecnologiche funzionali.
              Nel prossimo futuro, desidero imparare PHP e Laravel per ampliare
              ulteriormente le mie competenze nel Back-End.
            </p>
          </div>
        </div>

        <div>
          <div className="py-16 px-8 sm:px-16" data-aos="fade-up">
            <h1
              className="text-red-500 mb-10 text-center underline my-4 font-bold text3xl  sm:text-2xl"
            >
              CONTATTI:
            </h1>
            <p className="text-xs" >
              <b>Nunber:</b> +39 3201852850
            </p>
            <p className="text-xs" >
              <b>Email: </b> francescofoti44@gmail.com
            </p>
            <p className="text-xs" >
              <b>City:</b> Brindisi
            </p>
            <Link
              to={"https://www.linkedin.com/in/francesco-foti-1a3b232b9/"}
              className="text-xs"
              
            >
              <b className="underline">Linkedin</b>
            </Link>
            <br />
            <Link
              to={"https://www.instagram.com/frangifrutti/"}
              className="text-xs"
              
            >
              <b className="underline">Instagram</b>
            </Link>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default About;
