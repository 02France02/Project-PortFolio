import { useEffect, useRef, useState } from "react";

/**
 * Video che carica il file solo quando entra nel viewport.
 * Evita di scaricare decine di MB di video tutti insieme al primo render.
 */
const LazyVideo = ({ src, className = "", ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" } // inizia a caricare poco prima che sia visibile
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={visible ? src : undefined}
      className={className}
      autoPlay
      loop
      playsInline
      muted
      preload="none"
      {...props}
    />
  );
};

export default LazyVideo;
