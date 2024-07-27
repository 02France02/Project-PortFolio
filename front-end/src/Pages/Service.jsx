import React, { useEffect } from "react";
import webApp_img from "../assets/webapp.jpg";
import Button from "../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
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
        <div className="relative">
          <div>
            <img
              src={webApp_img}
              className="z-0 absolute inset-0 w-full h-full object-cover blur-[4px]"
            />
          </div>
          {/* Start servizi */}
          {/* Sito web */}
          <div className=" relative z-10  p-10">
            <div className="bg-green-950/70 rounded-3xl p-3 w-1/2 max-md:w-full" data-aos="fade-right" data-aos-delay="100">
              <h2 className="flex z-10 lg:text-2xl font-bold mb-4 max-sm:text-base sm:text-xl ">
                Realizzo il Tuo Sito Web
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 48 45"
                  className="ml-5"
                >
                  <g fill="none">
                    <rect
                      width="40"
                      height="32"
                      x="4"
                      y="8"
                      stroke="#000"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      rx="3"
                    />
                    <path
                      fill="#2f88ff"
                      stroke="#000"
                      strokeWidth="4"
                      d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
                    />
                    <circle
                      r="2"
                      fill="#fff"
                      transform="matrix(0 -1 -1 0 10 14)"
                    />
                    <circle
                      r="2"
                      fill="#fff"
                      transform="matrix(0 -1 -1 0 16 14)"
                    />
                  </g>
                </svg>
              </h2>
              <p className="lg:text-base sm:text-sm">
                Possono essere <b> Statici </b>o<b> Dinamici</b>. Sono pagine
                informative principalmente destinate a fornire contenuti agli
                utenti.
              </p>
            </div>
          </div>
          {/* Web App */}
          <div className="flex justify-end relative z-10  p-10">
            <div className=" bg-slate-900/70 rounded-3xl p-3 w-1/2 max-md:w-full" data-aos="fade-left" data-aos-delay="500">
              <h2 className="flex z-10 lg:text-2xl font-bold mb-4 max-sm:text-base sm:text-xl ">
                Realizzo la Tua Web App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.1em"
                  height="1.1em"
                  viewBox="0 0 48 48"
                  className="ml-5"
                >
                  <defs>
                    <mask id="ipTMoreApp0">
                      <g
                        fill="none"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <path
                          fill="#555"
                          d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 24H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2ZM42 4H30a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                        />
                        <path
                          strokeLinecap="round"
                          d="M28 28h16m-8 8h8m-16 8h16"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="#8970c2"
                    d="M0 0h48v48H0z"
                    mask="url(#ipTMoreApp0)"
                  />
                </svg>
              </h2>
              <p className="lg:text-base sm:text-sm">
                Possono essere <b> Interattive </b>e<b> Dinamiche</b>. Sono
                programmi interattivi progettati per offrire funzionalità
                specifiche agli utenti. <br />
              </p>
              <p className="lg:text-base sm:text-sm">
                Vengono Progettate utilizzando un'Architettura Full-Stack,
                inclusi <b> Front-End</b> ed <b> Back-End</b>.
              </p>
            </div>
          </div>
          {/* Social */}
          <div className=" relative z-10  p-10 ">
            <div className=" bg-red-950/70 rounded-3xl p-3 w-1/2 max-md:w-full" data-aos="fade-right" data-aos-delay="1000">
              <h2 className="flex z-10 lg:text-2xl font-bold mb-4 max-sm:text-base sm:text-xl ">
                Gestisco i Tuoi Social
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 48 48"
                  className="ml-5"
                >
                  <path
                    fill="none"
                    stroke="#8970c2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m43.77 26l-3.65 1.39v11a1.31 1.31 0 0 1-2.61.25a1 1 0 0 1 0-.25v-.62a45.3 45.3 0 0 0-17.82-6.81l.39 1.21a1 1 0 0 1-.64 1.18a.8.8 0 0 1-.27 0h-.62l1.29 4.32a1 1 0 0 1-.65 1.18a1 1 0 0 1-.27 0h-4.05a.89.89 0 0 1-.87-.65l-2.31-7.74h-2.2a2 2 0 0 1-2-2v-.92a1.9 1.9 0 0 1-1.95-1.84v-4.25a1.91 1.91 0 0 1 1.89-1.92h0v-.89a2 2 0 0 1 2-2h5.83c8 0 16.79-3.47 22.28-7.15v-.68a1.32 1.32 0 0 1 2.62 0v11l3.65 1.39a1.14 1.14 0 0 1 .72 1.06v2.65a1.14 1.14 0 0 1-.76 1.09m-3.61-6.18v7.54"
                  />
                  <path
                    fill="none"
                    stroke="#8970c2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.71 30.46a56 56 0 0 1 8 .43"
                  />
                </svg>
              </h2>
              <p className="lg:text-base sm:text-sm">
                Possono gestire la Publicazione ed la Sponsorizzarione dei tuoi{" "}
                <b>Social</b>, con indicizzazione usando le giuste{" "}
                <b>Strategie</b>
              </p>
            </div>
          </div>
        </div>
        {/* Contattami */}
        <div className="relative flex items-center justify-center ">
          <div className="absolute inset-0 image_home1"></div>
          <div className="relative z-10  bg-opacity-60 p-[6%] rounded-lg text-center flex flex-col items-center gap-5" data-aos="fade-in" >
            <h2 className="font-extrabold text-2xl max-xs:text-xl underline">
              ANCORA INDECIS@?
            </h2>
            <p className="w-1/2 lg:text-base sm:text-sm">
              Contattami per una Breve Consulenza o per un Preventivo, al Fine
              di Scegliere il Servizio che più fa per Te!
            </p>
            <div className="flex gap-7  max-xs:flex-wrap justify-center">
              <Button text="Contattami" path="/contact"  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
