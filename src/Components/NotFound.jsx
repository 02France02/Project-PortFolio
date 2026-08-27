import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="flex h-screen items-center justify-center bg-gray-900 sm:p-5">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-8xl font-extrabold text-indigo-500">404</h1>
        <h2 className="p-3 text-xl font-bold text-white">
          {t("notFound.title")}
        </h2>
        <p className="p-3 text-gray-400">{t("notFound.text")}</p>
        <Link to="/">
          <button className="rounded-lg bg-indigo-500 px-6 py-2 font-semibold text-white transition-colors duration-200 hover:bg-indigo-600">
            {t("notFound.backHome")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
