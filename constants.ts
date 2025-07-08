
import { Position } from './types';

export const GAME_WIDTH = 600;
export const GAME_HEIGHT = 700;

export const PLAYER_WIDTH = 40;
export const PLAYER_HEIGHT = 50;

export const PLAYER_START_POS: Position = {
  x: GAME_WIDTH / 2 - PLAYER_WIDTH / 2,
  y: GAME_HEIGHT - PLAYER_HEIGHT - 10,
};

export const CAR_WIDTH = 80;
export const CAR_HEIGHT = 40;

export const CAR_LANES_Y: number[] = [
    GAME_HEIGHT - 120,
    GAME_HEIGHT - 180,
    GAME_HEIGHT - 240,
    GAME_HEIGHT - 300,
    GAME_HEIGHT - 360,
    GAME_HEIGHT - 420,
    GAME_HEIGHT - 480,
    GAME_HEIGHT - 540
];
