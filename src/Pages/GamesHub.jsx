import { useTranslation } from "react-i18next";
import GameCard from "../Components/games/GameCard";
import { games } from "../Components/games/gamesRegistry";

const GamesHub = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 py-16 sm:px-12">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {t("games.hubTitle")}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400">
          {t("games.hubSubtitle")}
        </p>
      </div>

      <div
        className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesHub;
