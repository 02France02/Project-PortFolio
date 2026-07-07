import webApp_img from "../assets/webapp.jpg";
import Button from "../Components/Button";

const Service = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={webApp_img}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover blur-[4px]"
        />
        <div className="absolute inset-0 z-[1] bg-gray-900/30"></div>

        {/* Sito Web */}
        <div className="relative z-10 p-10">
          <div
            className="w-1/2 rounded-3xl bg-green-950/80 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 max-md:w-full"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 className="z-10 mb-4 flex items-center font-bold max-sm:text-base sm:text-xl lg:text-2xl">
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
                  <circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)" />
                  <circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)" />
                </g>
              </svg>
            </h2>
            <p className="sm:text-sm lg:text-base">
              Possono essere <b>Statici</b> o <b>Dinamici</b>. Sono pagine
              informative principalmente destinate a fornire contenuti agli
              utenti.
            </p>
          </div>
        </div>

        {/* Web App */}
        <div className="relative z-10 flex justify-end p-10">
          <div
            className="w-1/2 rounded-3xl bg-slate-900/80 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 max-md:w-full"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2 className="z-10 mb-4 flex items-center font-bold max-sm:text-base sm:text-xl lg:text-2xl">
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
                      <path strokeLinecap="round" d="M28 28h16m-8 8h8m-16 8h16" />
                    </g>
                  </mask>
                </defs>
                <path fill="#8970c2" d="M0 0h48v48H0z" mask="url(#ipTMoreApp0)" />
              </svg>
            </h2>
            <p className="sm:text-sm lg:text-base">
              Possono essere <b>Interattive</b> e <b>Dinamiche</b>. Sono
              programmi interattivi progettati per offrire funzionalità
              specifiche agli utenti.
            </p>
            <p className="sm:text-sm lg:text-base">
              Vengono progettate utilizzando un'architettura Full-Stack, inclusi{" "}
              <b>Front-End</b> e <b>Back-End</b>.
            </p>
          </div>
        </div>

        {/* Social */}
        <div className="relative z-10 p-10">
          <div
            className="w-1/2 rounded-3xl bg-red-950/80 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 max-md:w-full"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <h2 className="z-10 mb-4 flex items-center font-bold max-sm:text-base sm:text-xl lg:text-2xl">
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
            <p className="sm:text-sm lg:text-base">
              Posso gestire la <b>pubblicazione</b> e la <b>sponsorizzazione</b>{" "}
              dei tuoi <b>Social</b>, con indicizzazione e le giuste{" "}
              <b>strategie</b>.
            </p>
          </div>
        </div>
      </div>

      {/* Contattami */}
      <div className="relative flex items-center justify-center">
        <div className="image_home1 absolute inset-0"></div>
        <div
          className="relative z-10 flex flex-col items-center gap-5 rounded-lg bg-opacity-60 p-[6%] text-center"
          data-aos="fade-in"
        >
          <h2 className="text-2xl font-extrabold underline max-xs:text-xl">
            ANCORA INDECISO?
          </h2>
          <p className="w-1/2 max-sm:w-full sm:text-sm lg:text-base">
            Contattami per una breve consulenza o per un preventivo, così da
            scegliere il servizio che fa più per te!
          </p>
          <div className="flex justify-center gap-7 max-xs:flex-wrap">
            <Button text="Contattami" path="/contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
