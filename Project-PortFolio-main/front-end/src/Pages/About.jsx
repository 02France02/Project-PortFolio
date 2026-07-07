import { Link } from "react-router-dom";
import code_video from "../assets/code_video.mp4";
import io from "../assets/io.png";

const experiences = [
  {
    period: "Giu 2025 — Presente",
    role: "Tecnico Informatico",
    company: "ITS Academy Mobilità",
    description:
      "Dal 10 giugno 2025 lavoro come Tecnico Informatico presso ITS Academy Mobilità: gestione e manutenzione dell'infrastruttura IT, supporto tecnico e assistenza hardware/software.",
    current: true,
  },
  {
    period: "2024",
    role: "Certificazione Full-Stack Development",
    company: "Develhope",
    description:
      "Certificazione in sviluppo web: HTML, CSS, JavaScript, React, Node.js e database relazionali e non relazionali.",
    current: false,
  },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center overflow-x-hidden px-8 py-16 sm:flex-row sm:px-16">
        <video
          src={code_video}
          className="absolute inset-0 z-0 h-full w-full object-cover blur-sm"
          autoPlay
          loop
          playsInline
          muted
          preload="metadata"
        ></video>
        <div className="absolute inset-0 z-[1] bg-gray-900/50"></div>
        <div
          className="z-10 mb-8 flex w-full justify-center sm:mb-0 sm:w-1/2"
          data-aos="fade-right"
        >
          <img
            src={io}
            alt="Francesco Foti"
            loading="lazy"
            className="h-auto w-[70%] max-w-lg rounded-[80px] object-cover shadow-2xl"
          />
        </div>
        <div
          className="z-10 flex w-full flex-col justify-center text-center sm:w-1/2 sm:text-left"
          data-aos="fade-left"
        >
          <h2 className="my-4 text-3xl font-bold text-white sm:text-4xl">
            CHI È <span className="text-[#EF6B5E] underline">FRA&TECH</span>?
          </h2>
          <p className="text-sm leading-7 text-white">
            Ciao, sono Francesco, ho 24 anni e benvenuti nel mio portfolio.
            <br />
            Attualmente lavoro come <b>Tecnico Informatico</b> presso{" "}
            <b>ITS Academy Mobilità</b> e sono uno Junior Front-End Developer
            con competenze anche nel Back-End. Per il <b>Front-End</b> utilizzo{" "}
            <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b> e{" "}
            <b>Tailwind CSS</b>. Per il <b>Back-End</b> ho studiato{" "}
            <b>Node.js</b> e database relazionali come <b>PostgreSQL</b> e non
            relazionali come <b>MongoDB</b>.
            <br />
            Sono una persona dinamica e appassionata del mondo informatico, sia
            hardware che software. Mi piace apprendere continuamente e
            migliorare le mie competenze: ho ottenuto una certificazione in
            sviluppo web da Develhope e la mia missione è trasformare idee in
            soluzioni tecnologiche funzionali.
          </p>
        </div>
      </div>

      {/* Esperienza — Timeline */}
      <section className="bg-gray-900 px-8 py-16 sm:px-16">
        <h2
          className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl"
          data-aos="fade-up"
        >
          ESPERIENZA
        </h2>
        <div className="relative mx-auto max-w-2xl">
          {/* Linea verticale */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-indigo-500/40 sm:left-1/2 sm:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`relative mb-12 flex flex-col pl-12 sm:w-1/2 sm:pl-0 ${
                index % 2 === 0
                  ? "sm:ml-auto sm:pl-12"
                  : "sm:mr-auto sm:pr-12 sm:text-right"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              {/* Pallino */}
              <span
                className={`absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-indigo-400 ${
                  exp.current ? "animate-pulse bg-indigo-500" : "bg-gray-800"
                } sm:left-auto ${
                  index % 2 === 0
                    ? "sm:left-0 sm:-translate-x-1/2"
                    : "sm:right-0 sm:translate-x-1/2"
                }`}
              ></span>

              <div className="rounded-xl border border-gray-800 bg-gray-800/50 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-500/50">
                {exp.current && (
                  <span className="mb-2 inline-block rounded-full bg-indigo-500/20 px-3 py-0.5 text-xs font-semibold text-indigo-300">
                    In corso
                  </span>
                )}
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {exp.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-gray-300">
                  {exp.company}
                </p>
                <p className="mt-2 text-xs leading-6 text-gray-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contatti */}
      <section className="bg-gray-900 px-8 pb-16 sm:px-16" data-aos="fade-up">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          CONTATTI
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 rounded-xl border border-gray-800 bg-gray-800/50 p-6 text-sm text-gray-300">
          <p>
            <b>Telefono:</b>{" "}
            <a
              href="tel:+393201852850"
              className="transition-colors hover:text-indigo-400"
            >
              +39 320 185 2850
            </a>
          </p>
          <p>
            <b>Email:</b>{" "}
            <a
              href="mailto:francescofoti44@gmail.com"
              className="transition-colors hover:text-indigo-400"
            >
              francescofoti44@gmail.com
            </a>
          </p>
          <p>
            <b>Città:</b> Brindisi
          </p>
          <div className="mt-2 flex gap-6">
            <Link
              to="https://www.linkedin.com/in/francesco-foti-1a3b232b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline transition-colors hover:text-indigo-400"
            >
              LinkedIn
            </Link>
            <Link
              to="https://www.instagram.com/frangifrutti/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline transition-colors hover:text-indigo-400"
            >
              Instagram
            </Link>
            <Link
              to="https://github.com/02France02"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline transition-colors hover:text-indigo-400"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
