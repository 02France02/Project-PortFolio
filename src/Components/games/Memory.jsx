import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useHighScore from "../../hooks/useHighScore";

const EMOJIS = ["🐛", "🚀", "💻", "☕", "🔥", "🎯"];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createDeck() {
  return shuffle([...EMOJIS, ...EMOJIS]).map((emoji, index) => ({
    id: index,
    emoji,
    matched: false,
  }));
}

const Memory = () => {
  const { t } = useTranslation();
  const [deck, setDeck] = useState(createDeck);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [best, setBest] = useHighScore("memory");
  const [locked, setLocked] = useState(false);

  const completed = deck.every((c) => c.matched);

  useEffect(() => {
    if (completed) {
      setBest((b) => (b === 0 ? moves : Math.min(b, moves)));
    }
  }, [completed]); // eslint-disable-line react-hooks/exhaustive-deps

  const flip = (index) => {
    if (locked || flipped.includes(index) || deck[index].matched) return;
    const next = [...flipped, index];
    setFlipped(next);
    if (next.length === 2) {
      setLocked(true);
      setMoves((m) => m + 1);
      const [a, b] = next;
      if (deck[a].emoji === deck[b].emoji) {
        setTimeout(() => {
          setDeck((prev) =>
            prev.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c))
          );
          setFlipped([]);
          setLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 800);
      }
    }
  };

  const restart = () => {
    setDeck(createDeck());
    setFlipped([]);
    setMoves(0);
    setLocked(false);
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
        <span className="text-indigo-400">
          {t("games.memory.moves")} {moves}
        </span>
        {best > 0 && (
          <span>
            {t("games.memory.record")} {best}
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {deck.map((card, i) => {
          const isFlipped = flipped.includes(i) || card.matched;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => flip(i)}
              className={`flex aspect-square items-center justify-center rounded-lg border text-2xl transition-all duration-150 ${
                card.matched
                  ? "border-green-500 bg-green-500/20"
                  : isFlipped
                  ? "border-indigo-400 bg-indigo-500/30"
                  : "border-gray-700 bg-gray-800/60 hover:bg-gray-700/60"
              }`}
            >
              {isFlipped ? card.emoji : ""}
            </button>
          );
        })}
      </div>

      {completed && (
        <p className="mt-4 text-sm font-semibold text-indigo-300" role="status">
          {t("games.memory.win", { count: moves })}
        </p>
      )}

      <button
        type="button"
        onClick={restart}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-600"
      >
        {t("games.memory.restart")}
      </button>
    </div>
  );
};

export default Memory;
