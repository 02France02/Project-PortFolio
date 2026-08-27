import { useState } from "react";

const STORAGE_PREFIX = "portfolio-game-";
const STORAGE_SUFFIX = "-best";

function isLocalStorageAvailable() {
  try {
    const testKey = "__portfolio_ls_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const storageAvailable = isLocalStorageAvailable();

export default function useHighScore(gameId, initial = 0) {
  const key = `${STORAGE_PREFIX}${gameId}${STORAGE_SUFFIX}`;

  const [best, setBestState] = useState(() => {
    if (!storageAvailable) return initial;
    const stored = window.localStorage.getItem(key);
    const parsed = stored !== null ? Number(stored) : NaN;
    return Number.isFinite(parsed) ? parsed : initial;
  });

  const setBest = (value) => {
    setBestState((prev) => {
      const next = typeof value === "function" ? value(prev) : value;
      if (storageAvailable) {
        try {
          window.localStorage.setItem(key, String(next));
        } catch {
          // localStorage non scrivibile (privacy mode, quota piena, ecc.): il record resta solo in memoria
        }
      }
      return next;
    });
  };

  return [best, setBest];
}
