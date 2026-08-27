import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useHighScore from "../../hooks/useHighScore";

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const EMPTY_BOARD = Array(9).fill(null);

function getWinner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return null;
}

function pickCpuMove(board) {
  const empty = board.map((v, i) => (v ? null : i)).filter((v) => v !== null);

  for (const i of empty) {
    const copy = [...board];
    copy[i] = "O";
    if (getWinner(copy) === "O") return i;
  }
  for (const i of empty) {
    const copy = [...board];
    copy[i] = "X";
    if (getWinner(copy) === "X") return i;
  }
  if (empty.includes(4)) return 4;
  return empty[Math.floor(Math.random() * empty.length)];
}

const Tris = () => {
  const { t } = useTranslation();
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [turn, setTurn] = useState("player");
  const [wins, setWins] = useHighScore("tris");
  const [status, setStatus] = useState(null);

  const winner = getWinner(board);
  const isDraw = !winner && board.every(Boolean);

  useEffect(() => {
    if (winner === "X" && status !== "win") {
      setStatus("win");
      setWins((w) => w + 1);
    } else if (winner === "O" && status !== "lose") {
      setStatus("lose");
    } else if (isDraw && status !== "draw") {
      setStatus("draw");
    }
  }, [winner, isDraw]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (turn !== "cpu" || winner || isDraw) return;
    const timer = setTimeout(() => {
      const move = pickCpuMove(board);
      if (move === undefined) return;
      setBoard((prev) => {
        const next = [...prev];
        next[move] = "O";
        return next;
      });
      setTurn("player");
    }, 500);
    return () => clearTimeout(timer);
  }, [turn, board, winner, isDraw]);

  const play = (i) => {
    if (board[i] || winner || isDraw || turn !== "player") return;
    const next = [...board];
    next[i] = "X";
    setBoard(next);
    setTurn("cpu");
  };

  const restart = () => {
    setBoard(EMPTY_BOARD);
    setTurn("player");
    setStatus(null);
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
        <span>
          {turn === "cpu" && !winner && !isDraw
            ? t("games.tris.cpuTurn")
            : t("games.tris.yourTurn")}
        </span>
        <span className="text-indigo-400">
          {t("games.tris.wins")} {wins}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            type="button"
            onClick={() => play(i)}
            disabled={!!cell || !!winner || isDraw || turn !== "player"}
            className={`flex aspect-square items-center justify-center rounded-lg border text-3xl font-extrabold transition-all duration-150 ${
              cell === "X"
                ? "border-indigo-400 bg-indigo-500/20 text-indigo-300"
                : cell === "O"
                ? "border-pink-400 bg-pink-500/20 text-pink-300"
                : "border-gray-700 bg-gray-800/60 hover:bg-gray-700/60"
            }`}
          >
            {cell}
          </button>
        ))}
      </div>

      {(winner || isDraw) && (
        <p className="mt-4 text-sm font-semibold text-indigo-300" role="status">
          {winner === "X"
            ? t("games.tris.youWin")
            : winner === "O"
            ? t("games.tris.youLose")
            : t("games.tris.draw")}
        </p>
      )}

      <button
        type="button"
        onClick={restart}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-600"
      >
        {t("games.tris.restart")}
      </button>
    </div>
  );
};

export default Tris;
