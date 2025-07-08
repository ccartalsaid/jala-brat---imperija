
export interface Position {
  x: number;
  y: number;
}

export interface CarData {
  id: number;
  position: Position;
  speed: number;
  direction: number; // 1 for right, -1 for left
}

export interface StoryContent {
    title: string;
    text: string;
    icon?: string;
}

export enum GameState {
  Story = 'STORY',
  Playing = 'PLAYING',
  Won = 'WON',
  Lost = 'LOST',
}