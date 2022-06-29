import { createContext } from 'react';
import { iCharacter } from '../models/character';

const initialContext: {
  characters: Array<iCharacter>;
  speaker: number;
  killCharacter(id: number): void;
  speakCharacter(id: number): void;
} = {
  characters: [],
  speaker: 0,
  killCharacter: (id) => {},
  speakCharacter: (id) => {},
};

export const CharactersContext = createContext(initialContext);
