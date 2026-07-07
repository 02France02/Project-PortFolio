import { useEffect, useRef, useState } from "react";

const GAME_DURATION = 20; // secondi
const GRID_SIZE = 9;

const BugHunt = () => {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [bugIndex, setBugIndex] = useState(-1);
  const [finished, setFinished] = useState(false);
  const moveTimer = useRef(null);

  const moveBug = () => {
    setBugIndex((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * GRID_SIZE);
      } while (next === prev);
      return next;
    });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setFinished(false);
    setPlaying(true);
    moveBug();
  };

  // Countdown
  useEffect(() => {
    if (!playing) return;
    if (timeLeft <= 0) {
      setPlaying(false);
      setFinished(true);
      setBugIndex(-1);
      setBest((b) => Math.max(b, score));
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [playing, timeLeft, score]);

  // Il bug scappa da solo se non lo prendi
  useEffect(() => {
    if (!playing) return;
    moveTimer.current = setTimeout(moveBug, 900);
    return () => clearTimeout(moveTimer.current);
  }, [playing, bugIndex]);

  const squash = (index) => {
    if (!playing || index !== bugIndex) return;
    setScore((s) => s + 1);
    moveBug();
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <h3 className="text-lg font-extrabold text-white">
        🐛 CACCIA AL BUG
      </h3>
      <p className="mt-1 text-xs text-gray-400">
        Ogni sviluppatore odia i bug... schiacciali prima che scappino!
      </p>

      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-gray-300">
        <span>
          ⏱️ {timeLeft}s
        </span>
        <span className="text-indigo-400">Punti: {score}</span>
        <span>🏆 Record: {best}</span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {Array.from({ length: GRID_SIZE }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => squash(i)}
            aria-label={i === bugIndex ? "Bug! Schiaccialo!" : "Casella vuota"}
            className={`flex aspect-square items-center justify-center rounded-lg border text-2xl transition-all duration-150 ${
              i === bugIndex
                ? "scale-105 border-indigo-400 bg-indigo-500/30"
                : "border-gray-700 bg-gray-800/60 hover:bg-gray-700/60"
            }`}
          >
            {i === bugIndex ? "🐛" : ""}
          </button>
        ))}
      </div>

      {finished && (
        <p className="mt-4 text-sm font-semibold text-indigo-300" role="status">
          {score >= 15
            ? `WOW, ${score} bug! Il codice è pulito 🚀`
            : score >= 8
            ? `${score} bug schiacciati, mica male! 💪`
            : `Solo ${score}... i bug sono ancora in produzione 😅`}
        </p>
      )}

      <button
        type="button"
        onClick={startGame}
        disabled={playing}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {playing ? "In gioco..." : finished ? "RIGIOCA" : "GIOCA"}
      </button>
    </div>
  );
};

export default BugHunt;
