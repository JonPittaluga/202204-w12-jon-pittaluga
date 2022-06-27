import { type } from 'os';

export interface iCharacter {
  // basic info
  id?: number;
  name: string;
  family: string;
  image: string;
  age: number;
  emoji: string;
  // interactions
  message: string;
  isAlive: boolean;
  // based on every role
  role: eRole;
  metadata: {
    dexterity?: number;
    weapon?: string;
    yearsOfReign?: number;
    knight?: string;
    brownNose?: number;
    counselOf?: string;
  };
}

export type eRole = 'fighter' | 'king' | 'advisor' | 'squire';
