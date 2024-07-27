import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video_project from "../assets/video_project.mp4";
import video_Bycycle from "../assets/bycycleFast.mp4";
import img_Bycycle from "../assets/by_img.png";
import video_ea_mobile from "../assets/ea_video_mobile.mp4";
import video_ea_desk from "../assets/ea_video.mp4";
import video_kang_mobile from "../assets/kang_video_mobile.mp4";
import video_kang_desk from "../assets/kang_video.mp4";
import video_pex_mobile from "../assets/pexelcrew_mobile_video.mp4";
import video_pex_desk from "../assets/pexel_desk_video.mp4";

const Projects = () => {
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
        <div className="relative flex gap-28 py-16 px-8 sm:px-16  items-center sm:items-center sm:justify-center flex-col">
          <video
            src={video_project}
            className="z-0 absolute inset-0 w-full h-full object-cover blur-md"
            autoPlay
            loop
            muted
          ></video>

          {/* ByCycle */}
          <div className="z-10" data-aos="fade-in">
            <div className="z-10 text-center">
              <h2 className="text-2xl font-bold text-white underline">
                ByCycle
              </h2>
              <p className="text-xs mx-auto mt-4 w-4/5 sm:w-3/4 md:w-1/2 text-gray-300">
                Esso è una community online dedicata a tutti gli amanti del
                ciclismo. Possiamo eseguire il Log-in e Log-out, interagire con
                altri utenti online, iniziare discussioni, scoprire nuovi
                percorsi ciclabili in tutta Europa, con dettagli e mappe,
                eliminare il proprio account ed altro!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <img
                  src={img_Bycycle}
                  alt="Bycycle"
                  className="w-[26%] max-sm:w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                />
              </div>
              <div className="w-full sm:w-1/2 flex justify-center">
                <video
                  src={video_Bycycle}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                ></video>
              </div>
            </div>
          </div>

          {/* EA Copia */}
          <div className="z-10" data-aos="fade-in">
            <div className="z-10 text-center">
              <h2 className="text-2xl font-bold text-white underline">
                Copia Electronics Art
              </h2>
              <p className="text-xs mx-auto mt-4 w-4/5 sm:w-3/4 md:w-1/2 text-gray-300">
                Esso è stato il mio primo progetto di team interamentre
                realizzato in Vanilla, HTML, CSS e Js. Abbiamo sviluppato nel
                dettaglio la copia del famoso sito
                <a href="https://www.ea.com/it-it" className="underline">
                  {" "}
                  Electronic Arts
                </a>{" "}
                quasi alla perfezione!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <video
                  src={video_ea_mobile}
                  alt="Bycycle"
                  className="w-[54%] max-sm:w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                  autoPlay
                  loop
                  muted
                />
              </div>
              <div className="w-full  flex justify-center">
                <video
                  src={video_ea_desk}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                ></video>
              </div>
            </div>
          </div>

          {/* Landing page */}
          <div className="z-10" data-aos="fade-in">
            <div className="z-10 text-center">
              <h2 className="text-2xl font-bold text-white underline">
                Landing Page React
              </h2>
              <p className="text-xs mx-auto mt-4 w-4/5 sm:w-3/4 md:w-1/2 text-gray-300">
                Essa è una semplice landing page realizzata con React, l'ho
                sviluppata a tempo perso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <video
                  src={video_pex_mobile}
                  alt="Bycycle"
                  className="w-[56%] max-sm:w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                  autoPlay
                  loop
                  muted
                />
              </div>
              <div className="w-full  flex justify-center">
                <video
                  src={video_pex_desk}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                ></video>
              </div>
            </div>
          </div>

          {/* Landing page Vanilla*/}
          <div className="z-10" data-aos="fade-in">
            <div className="z-10 text-center">
              <h2 className="text-2xl font-bold text-white underline">
                Landing Page Vanilla
              </h2>
              <p className="text-xs mx-auto mt-4 w-4/5 sm:w-3/4 md:w-1/2 text-gray-300">
                Essa è un'altra una semplice landing page realizzata in Vanilla, usando solo HTML, CSS e Js. E' stata realizata su base di un esempio reale
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-12 gap-4">
              <div className="w-full sm:w-1/2 flex justify-center">
                <video
                  src={video_kang_mobile}
                  alt="Bycycle"
                  className="w-[56%] max-sm:w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                  autoPlay
                  loop
                  muted
                />
              </div>
              <div className="w-full  flex justify-center">
                <video
                  src={video_kang_desk}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="w-full rounded-md object-contain transition duration-500 transform group-hover:translate-y-2 group-hover:opacity-90"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
