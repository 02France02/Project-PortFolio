import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Root() {
    const location = useLocation();
    // useEffect che si attiva ogni volta che si cambia route e che porta in cima alla pagina
    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, [location]);
  
    return (
      <div>
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    );
  }
  
  export default Root;
  