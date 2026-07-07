import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// AOS inizializzato UNA sola volta per tutta l'app (prima era ripetuto in ogni pagina)
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

function Root() {
  const location = useLocation();

  // Ad ogni cambio di route: torna in cima e ricalcola le animazioni
  useEffect(() => {
    window.scrollTo({ top: 0 });
    AOS.refreshHard();
  }, [location]);

  return (
    <div className="bg-gray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
