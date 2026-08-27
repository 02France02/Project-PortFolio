import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useHighScore from "../../hooks/useHighScore";

const SIZE = 4;

function emptyBoard() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

function cloneBoard(board) {
  return board.map((row) => [...row]);
}

function getEmptyCells(board) {
  const cells = [];
  board.forEach((row, y) =>
    row.forEach((v, x) => {
      if (v === 0) cells.push({ x, y });
    })
  );
  return cells;
}

function spawnTile(board) {
  const empty = getEmptyCells(board);
  if (empty.length === 0) return board;
  const { x, y } = empty[Math.floor(Math.random() * empty.length)];
  const next = cloneBoard(board);
  next[y][x] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

function moveRowLeft(row) {
  const values = row.filter((v) => v !== 0);
  const merged = [];
  let scoreGained = 0;
  let didMerge = false;
  for (let i = 0; i < values.length; i++) {
    if (i < values.length - 1 && values[i] === values[i + 1]) {
      const mergedValue = values[i] * 2;
      merged.push(mergedValue);
      scoreGained += mergedValue;
      i++;
      didMerge = true;
    } else {
      merged.push(values[i]);
    }
  }
  while (merged.length < SIZE) merged.push(0);
  const moved = didMerge || merged.some((v, i) => v !== row[i]);
  return { row: merged, scoreGained, moved };
}

function transpose(board) {
  const next = emptyBoard();
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      next[x][y] = board[y][x];
    }
  }
  return next;
}

function reverseRows(board) {
  return board.map((row) => [...row].reverse());
}

function moveBoard(board, direction) {
  let working = board;
  const usedTranspose = direction === "up" || direction === "down";
  const usedReverse = direction === "right" || direction === "down";

  if (usedTranspose) working = transpose(working);
  if (usedReverse) working = reverseRows(working);

  let moved = false;
  let scoreGained = 0;
  const movedRows = working.map((row) => {
    const result = moveRowLeft(row);
    if (result.moved) moved = true;
    scoreGained += result.scoreGained;
    return result.row;
  });

  let result = movedRows;
  if (usedReverse) result = reverseRows(result);
  if (usedTranspose) result = transpose(result);

  return { board: result, moved, scoreGained };
}

function canMove(board) {
  if (getEmptyCells(board).length > 0) return true;
  return ["left", "right", "up", "down"].some((dir) => moveBoard(board, dir).moved);
}

function initBoard() {
  return spawnTile(spawnTile(emptyBoard()));
}

const TILE_COLORS = {
  0: "bg-gray-800/60",
  2: "bg-gray-200 text-gray-900",
  4: "bg-gray-300 text-gray-900",
  8: "bg-orange-300 text-gray-900",
  16: "bg-orange-400 text-white",
  32: "bg-orange-500 text-white",
  64: "bg-orange-600 text-white",
  128: "bg-yellow-400 text-white",
  256: "bg-yellow-500 text-white",
  512: "bg-yellow-600 text-white",
  1024: "bg-indigo-500 text-white",
  2048: "bg-indigo-400 text-white",
};

const KEY_DIRECTIONS = {
  ArrowUp: "up",
  w: "up",
  W: "up",
  ArrowDown: "down",
  s: "down",
  S: "down",
  ArrowLeft: "left",
  a: "left",
  A: "left",
  ArrowRight: "right",
  d: "right",
  D: "right",
};

const TwoZeroFourEight = () => {
  const { t } = useTranslation();
  const [board, setBoard] = useState(initBoard);
  const [score, setScore] = useState(0);
  const [best, setBest] = useHighScore("2048");
  const [gameOver, setGameOver] = useState(false);
  const touchStartRef = useRef(null);

  const move = useCallback(
    (direction) => {
      setBoard((prev) => {
        if (gameOver) return prev;
        const result = moveBoard(prev, direction);
        if (!result.moved) return prev;
        const spawned = spawnTile(result.board);
        setScore((s) => {
          const next = s + result.scoreGained;
          setBest((b) => Math.max(b, next));
          return next;
        });
        if (!canMove(spawned)) setGameOver(true);
        return spawned;
      });
    },
    [gameOver, setBest]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      const direction = KEY_DIRECTIONS[e.key];
      if (!direction) return;
      e.preventDefault();
      move(direction);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [move]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 20) {
      if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? "right" : "left");
      else move(dy > 0 ? "down" : "up");
    }
    touchStartRef.current = null;
  };

  const restart = () => {
    setBoard(initBoard());
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
        <span className="text-indigo-400">
          {t("games.twoZeroFourEight.score")} {score}
        </span>
        <span>
          {t("games.twoZeroFourEight.record")} {best}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-gray-500">
        {t("games.twoZeroFourEight.instructions")}
      </p>

      <div
        className="mx-auto mt-4 grid touch-none select-none gap-2 rounded-lg bg-gray-800 p-2"
        style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)`, width: "min(100%, 320px)" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {board.flatMap((row, y) =>
          row.map((value, x) => (
            <div
              key={`${x}-${y}`}
              className={`flex aspect-square items-center justify-center rounded-md text-lg font-extrabold transition-colors duration-150 ${
                TILE_COLORS[value] ?? "bg-indigo-300 text-white"
              }`}
            >
              {value > 0 ? value : ""}
            </div>
          ))
        )}
      </div>

      {gameOver && (
        <p className="mt-4 text-sm font-semibold text-indigo-300" role="status">
          {t("games.twoZeroFourEight.gameOver")} — {score}
        </p>
      )}

      <button
        type="button"
        onClick={restart}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-600"
      >
        {t("games.twoZeroFourEight.newGame")}
      </button>
    </div>
  );
};

export default TwoZeroFourEight;
