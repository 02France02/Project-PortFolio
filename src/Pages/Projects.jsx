import LazyVideo from "../Components/LazyVideo";
import video_project from "../assets/video_project.mp4";
import video_Bycycle from "../assets/bycycleFast.mp4";
import img_Bycycle from "../assets/by_img.png";
import video_ea_mobile from "../assets/ea_video_mobile.mp4";
import video_ea_desk from "../assets/ea_video.mp4";
import video_kang_mobile from "../assets/kang_video_mobile.mp4";
import video_kang_desk from "../assets/kang_video.mp4";
import video_pex_mobile from "../assets/pexelcrew_mobile_video.mp4";
import video_pex_desk from "../assets/pexel_desk_video.mp4";

const mediaClass =
  "rounded-md object-contain shadow-lg transition duration-500 hover:-translate-y-1 hover:opacity-90";

const projects = [
  {
    title: "ByCycle",
    description:
      "Una community online dedicata a tutti gli amanti del ciclismo. Permette di fare log-in e log-out, interagire con altri utenti, avviare discussioni, scoprire nuovi percorsi ciclabili in tutta Europa con dettagli e mappe, eliminare il proprio account e molto altro!",
    mobileMedia: { type: "img", src: img_Bycycle, width: "w-[26%]" },
    desktopMedia: { type: "video", src: video_Bycycle },
  },
  {
    title: "Copia Electronic Arts",
    description: (
      <>
        Il mio primo progetto di team, interamente realizzato in Vanilla: HTML,
        CSS e JavaScript. Abbiamo riprodotto nel dettaglio il famoso sito{" "}
        <a
          href="https://www.ea.com/it-it"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition-colors hover:text-indigo-400"
        >
          Electronic Arts
        </a>{" "}
        quasi alla perfezione!
      </>
    ),
    mobileMedia: { type: "video", src: video_ea_mobile, width: "w-[54%]" },
    desktopMedia: { type: "video", src: video_ea_desk },
  },
  {
    title: "Landing Page React",
    description:
      "Una landing page realizzata con React, sviluppata nel tempo libero per sperimentare componenti e animazioni.",
    mobileMedia: { type: "video", src: video_pex_mobile, width: "w-[56%]" },
    desktopMedia: { type: "video", src: video_pex_desk },
  },
  {
    title: "Landing Page Vanilla",
    description:
      "Un'altra landing page, realizzata solo con HTML, CSS e JavaScript, sviluppata sulla base di un esempio reale.",
    mobileMedia: { type: "video", src: video_kang_mobile, width: "w-[56%]" },
    desktopMedia: { type: "video", src: video_kang_desk },
  },
];

const Media = ({ media, alt }) =>
  media.type === "img" ? (
    <img
      src={media.src}
      alt={alt}
      loading="lazy"
      className={`${media.width ?? "w-full"} max-sm:w-full ${mediaClass}`}
    />
  ) : (
    <LazyVideo
      src={media.src}
      className={`${media.width ?? "w-full"} max-sm:w-full ${mediaClass}`}
    />
  );

const Projects = () => {
  return (
    <div className="relative flex flex-col items-center gap-28 overflow-hidden px-8 py-16 sm:px-16">
      <video
        src={video_project}
        className="absolute inset-0 z-0 h-full w-full object-cover blur-md"
        autoPlay
        loop
        playsInline
        muted
        preload="metadata"
      ></video>
      <div className="absolute inset-0 z-[1] bg-gray-900/50"></div>

      <h1 className="z-10 text-center text-3xl font-extrabold text-white sm:text-4xl">
        I MIEI PROGETTI
      </h1>

      {projects.map((project) => (
        <div key={project.title} className="z-10 w-full" data-aos="fade-up">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white underline">
              {project.title}
            </h2>
            <p className="mx-auto mt-4 w-4/5 text-xs leading-6 text-gray-300 sm:w-3/4 md:w-1/2">
              {project.description}
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex w-full justify-center sm:w-1/2">
              <Media media={project.mobileMedia} alt={project.title} />
            </div>
            <div className="flex w-full justify-center sm:w-1/2">
              <Media media={project.desktopMedia} alt={project.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
