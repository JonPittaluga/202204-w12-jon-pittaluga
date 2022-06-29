// TODO: Cleanup and improve this hook

import { useEffect, useState } from 'react';
import { iCharacter } from './../models/character';
import { dataStatic } from './../data/data-static';
// import * as api from '../services/http-tasks';

export function useCharacters() {
  // Model
  const initialState: Array<iCharacter> = dataStatic;
  const speaker: number = 0;
  const [characters, setCharacters] = useState(initialState);
  const [speakerId, setSpeaker] = useState(speaker);

  useEffect(() => {
    setCharacters(initialState);
    // FIXME: This should include a call to an api. Otherwise is stupid
    // api.getAllTasks().then((data) => {
    //   setTasks(data);
    //   setLoading(false);
    // });
  }, [initialState]);

  // Controller
  const killCharacter = (id: number) => {
    setCharacters(
      characters.map((character) => {
        if (character.id === id) {
          return {
            ...character,
            isAlive: false,
          };
        }
        return character;
      })
    );
  };

  const speakCharacter = (id: number) => {
    setSpeaker(id);
    console.log(id + ' is speaking');
  };

  return {
    characters,
    speaker,
    killCharacter,
    speakCharacter,
  };
}
