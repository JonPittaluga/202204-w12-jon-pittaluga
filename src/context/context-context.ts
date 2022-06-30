import { createContext } from 'react';
import { iCharacter } from '../models/character';

const initialContext: {
  characters: Array<iCharacter>;
  speakersData: Array<iCharacter>;
  killCharacter(id: number): void;
  speakCharacter(id: number): void;
  showMessageData: boolean;
} = {
  characters: [],
  speakersData: [],
  killCharacter: (id) => {},
  speakCharacter: (id) => {},
  showMessageData: false,
};

export const CharactersContext = createContext(initialContext);
