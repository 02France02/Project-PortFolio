import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import  Root  from "./Roots/Root.jsx";
import NotFound from "./Components/NotFound.jsx";
import Homepage from "./Pages/Homepage.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Projects.jsx";
import Service from "./Pages/Service.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage/> },
      { path: "/about", element: <About/> },
      { path: "/projects", element: <Projects/> },
      { path: "/service", element: <Service/> },
      { path: "/contact", element: <Contact/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);
