import { Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getGameBySlug } from "../Components/games/gamesRegistry";

const GameLoader = () => (
  <div className="flex min-h-[40vh] items-center justify-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
  </div>
);

const GamePage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const game = getGameBySlug(slug);

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const { Component } = game;

  return (
    <div className="px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-lg">
        <Link
          to="/games"
          className="text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
        >
          {t("games.backToGames")}
        </Link>

        <h1 className="mb-8 mt-4 text-center text-2xl font-extrabold text-white sm:text-3xl">
          {t(game.titleKey)}
        </h1>

        <Suspense fallback={<GameLoader />}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default GamePage;
