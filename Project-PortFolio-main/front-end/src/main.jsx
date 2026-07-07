import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Roots/Root.jsx";
import NotFound from "./Components/NotFound.jsx";
import Homepage from "./Pages/Homepage.jsx";

// Code splitting: le altre pagine vengono caricate solo quando servono
const About = lazy(() => import("./Pages/About.jsx"));
const Projects = lazy(() => import("./Pages/Projects.jsx"));
const Service = lazy(() => import("./Pages/Service.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));

const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center bg-gray-900">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
  </div>
);

const withSuspense = (element) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: withSuspense(<About />) },
      { path: "/projects", element: withSuspense(<Projects />) },
      { path: "/service", element: withSuspense(<Service />) },
      { path: "/contact", element: withSuspense(<Contact />) },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
