import { lazy } from "react";

const BugHunt = lazy(() => import("../BugHunt"));
const Snake = lazy(() => import("./Snake"));
const Tris = lazy(() => import("./Tris"));
const Memory = lazy(() => import("./Memory"));
const ReactionTest = lazy(() => import("./ReactionTest"));
const TwoZeroFourEight = lazy(() => import("./TwoZeroFourEight"));

// Ogni gioco: slug (route), chiavi i18n per titolo/descrizione, colore placeholder
// (finché non esiste uno screenshot reale in src/assets/games/) e componente.
export const games = [
  {
    slug: "bug-hunt",
    titleKey: "games.bugHunt.cardTitle",
    descriptionKey: "games.bugHunt.cardDescription",
    emoji: "🐛",
    color: "from-indigo-600 to-indigo-900",
    image: null,
    Component: BugHunt,
  },
  {
    slug: "snake",
    titleKey: "games.snake.cardTitle",
    descriptionKey: "games.snake.cardDescription",
    emoji: "🐍",
    color: "from-emerald-600 to-emerald-900",
    image: null,
    Component: Snake,
  },
  {
    slug: "tris",
    titleKey: "games.tris.cardTitle",
    descriptionKey: "games.tris.cardDescription",
    emoji: "❌",
    color: "from-pink-600 to-pink-900",
    image: null,
    Component: Tris,
  },
  {
    slug: "memory",
    titleKey: "games.memory.cardTitle",
    descriptionKey: "games.memory.cardDescription",
    emoji: "🧠",
    color: "from-amber-600 to-amber-900",
    image: null,
    Component: Memory,
  },
  {
    slug: "reaction-test",
    titleKey: "games.reactionTest.cardTitle",
    descriptionKey: "games.reactionTest.cardDescription",
    emoji: "⚡",
    color: "from-red-600 to-red-900",
    image: null,
    Component: ReactionTest,
  },
  {
    slug: "2048",
    titleKey: "games.twoZeroFourEight.cardTitle",
    descriptionKey: "games.twoZeroFourEight.cardDescription",
    emoji: "🔢",
    color: "from-orange-600 to-orange-900",
    image: null,
    Component: TwoZeroFourEight,
  },
];

export function getGameBySlug(slug) {
  return games.find((g) => g.slug === slug);
}
