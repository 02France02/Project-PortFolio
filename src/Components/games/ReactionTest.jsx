import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useHighScore from "../../hooks/useHighScore";

const ReactionTest = () => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState("idle"); // idle | waiting | ready | tooSoon | result
  const [resultMs, setResultMs] = useState(null);
  const [best, setBest] = useHighScore("reaction-test");
  const startTimeRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const start = () => {
    setPhase("waiting");
    setResultMs(null);
    const delay = 1000 + Math.random() * 3000;
    timerRef.current = setTimeout(() => {
      startTimeRef.current = performance.now();
      setPhase("ready");
    }, delay);
  };

  const handleBoxClick = () => {
    if (phase === "idle" || phase === "tooSoon" || phase === "result") {
      start();
      return;
    }
    if (phase === "waiting") {
      clearTimeout(timerRef.current);
      setPhase("tooSoon");
      return;
    }
    if (phase === "ready") {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setResultMs(elapsed);
      setBest((b) => (b === 0 ? elapsed : Math.min(b, elapsed)));
      setPhase("result");
    }
  };

  const bgClass =
    phase === "ready"
      ? "bg-green-600 hover:bg-green-500"
      : phase === "waiting"
      ? "bg-red-900"
      : phase === "tooSoon"
      ? "bg-yellow-700 hover:bg-yellow-600"
      : "bg-gray-800/60 hover:bg-gray-700/60";

  const label =
    phase === "idle"
      ? t("games.reactionTest.start")
      : phase === "waiting"
      ? t("games.reactionTest.waitPrompt")
      : phase === "ready"
      ? t("games.reactionTest.clickPrompt")
      : phase === "tooSoon"
      ? t("games.reactionTest.tooSoon")
      : t("games.reactionTest.resultMs", { value: resultMs });

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <div className="flex items-center justify-end text-xs font-semibold text-gray-300">
        {best > 0 && (
          <span>
            {t("games.reactionTest.record")} {best} ms
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={handleBoxClick}
        className={`mt-4 flex h-48 w-full items-center justify-center rounded-xl px-4 text-center text-lg font-extrabold text-white transition-colors duration-150 ${bgClass}`}
      >
        {label}
      </button>

      {phase === "result" && (
        <p className="mt-4 text-xs font-semibold text-gray-400">
          {t("games.reactionTest.playAgain")}
        </p>
      )}
    </div>
  );
};

export default ReactionTest;
