import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 sm:p-5">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-8xl font-extrabold text-indigo-500">404</h1>
        <h2 className="p-3 text-xl font-bold text-white">
          Ops! Pagina non trovata.
        </h2>
        <p className="p-3 text-gray-400">
          La pagina che cerchi non esiste o è stata spostata.
        </p>
        <Link to="/">
          <button className="rounded-lg bg-indigo-500 px-6 py-2 font-semibold text-white transition-colors duration-200 hover:bg-indigo-600">
            Torna alla Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
