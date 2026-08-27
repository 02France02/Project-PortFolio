import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GameCard = ({ game }) => {
  const { t } = useTranslation();

  return (
    <Link
      to={`/games/${game.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-500/50"
    >
      <div
        className={`flex aspect-video items-center justify-center bg-gradient-to-br text-6xl ${game.color}`}
      >
        {game.image ? (
          <img
            src={game.image}
            alt={t(game.titleKey)}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{game.emoji}</span>
        )}
      </div>
      <div className="p-4 text-left">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-indigo-300">
          {t(game.titleKey)}
        </h3>
        <p className="mt-1 text-xs text-gray-400">{t(game.descriptionKey)}</p>
      </div>
    </Link>
  );
};

export default GameCard;
