import type { Card } from "./card.ts";

export type Player = {
  username: string;
  host: boolean;
  hand: Card[];
  cardCount: number;
};

export type Game = {
  players: Player[];
  gamePhase: "waiting" | "playing" | "finished";
  hostUsername: string;
};
