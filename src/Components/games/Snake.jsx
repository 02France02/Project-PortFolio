import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useHighScore from "../../hooks/useHighScore";

const GRID_SIZE = 14;
const TICK_MS = 150;
const INITIAL_SNAKE = [
  { x: 7, y: 7 },
  { x: 6, y: 7 },
  { x: 5, y: 7 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };

function randomEmptyCell(snake) {
  let cell;
  do {
    cell = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (snake.some((s) => s.x === cell.x && s.y === cell.y));
  return cell;
}

const Snake = () => {
  const { t } = useTranslation();
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(() => randomEmptyCell(INITIAL_SNAKE));
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [best, setBest] = useHighScore("snake");
  const directionRef = useRef(INITIAL_DIRECTION);
  const nextDirectionRef = useRef(INITIAL_DIRECTION);
  const touchStartRef = useRef(null);

  const score = snake.length - INITIAL_SNAKE.length;

  const start = () => {
    setSnake(INITIAL_SNAKE);
    setFood(randomEmptyCell(INITIAL_SNAKE));
    directionRef.current = INITIAL_DIRECTION;
    nextDirectionRef.current = INITIAL_DIRECTION;
    setGameOver(false);
    setPlaying(true);
  };

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        directionRef.current = nextDirectionRef.current;
        const dir = directionRef.current;
        const head = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

        const hitWall =
          head.x < 0 || head.y < 0 || head.x >= GRID_SIZE || head.y >= GRID_SIZE;
        const hitSelf = prev.some((seg) => seg.x === head.x && seg.y === head.y);

        if (hitWall || hitSelf) {
          setPlaying(false);
          setGameOver(true);
          setBest((b) => Math.max(b, prev.length - INITIAL_SNAKE.length));
          return prev;
        }

        const ateFood = head.x === food.x && head.y === food.y;
        const nextSnake = [head, ...prev];
        if (!ateFood) {
          nextSnake.pop();
        } else {
          setFood(randomEmptyCell(nextSnake));
        }
        return nextSnake;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [playing, food]); // eslint-disable-line react-hooks/exhaustive-deps

  const setDirection = useCallback((dx, dy) => {
    const cur = directionRef.current;
    if (cur.x === -dx && cur.y === -dy) return;
    nextDirectionRef.current = { x: dx, y: dy };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          setDirection(0, -1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          setDirection(0, 1);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          setDirection(-1, 0);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          setDirection(1, 0);
          break;
        default:
          return;
      }
      e.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setDirection]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection(dx > 0 ? 1 : -1, 0);
    } else {
      setDirection(0, dy > 0 ? 1 : -1);
    }
    touchStartRef.current = null;
  };

  const snakeSet = new Set(snake.map((s) => `${s.x},${s.y}`));

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-gray-800 bg-gray-900/80 p-6 text-center shadow-xl backdrop-blur">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
        <span className="text-indigo-400">
          {t("games.snake.score")} {score}
        </span>
        <span>
          {t("games.snake.record")} {best}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-gray-500">{t("games.snake.instructions")}</p>

      <div
        className="mx-auto mt-4 grid touch-none select-none gap-[1px] rounded-lg bg-gray-800 p-1"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          width: "min(100%, 320px)",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          const isHead = snake[0].x === x && snake[0].y === y;
          const isSnake = snakeSet.has(`${x},${y}`);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={i}
              className={`aspect-square rounded-[2px] ${
                isHead
                  ? "bg-indigo-300"
                  : isSnake
                  ? "bg-indigo-500"
                  : isFood
                  ? "bg-pink-500"
                  : "bg-gray-900/60"
              }`}
            />
          );
        })}
      </div>

      {gameOver && (
        <p className="mt-4 text-sm font-semibold text-indigo-300" role="status">
          {t("games.snake.gameOver")} — {score}
        </p>
      )}

      <button
        type="button"
        onClick={start}
        disabled={playing}
        className="mt-4 rounded-lg bg-indigo-500 px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {playing
          ? t("bugHunt.playing")
          : gameOver
          ? t("games.snake.playAgain")
          : t("games.snake.start")}
      </button>
    </div>
  );
};

export default Snake;
