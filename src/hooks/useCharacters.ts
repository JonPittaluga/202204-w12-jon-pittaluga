// TODO: Cleanup and improve this hook

import { useEffect, useState } from 'react';
import { iCharacter } from './../models/character';
import { dataStatic } from './../data/data-static';
// import * as api from '../services/http-tasks';

export function useCharacters() {
  // Model
  const initialState: Array<iCharacter> = dataStatic;
  // const speaker: iCharacter = {
  //   id: 0,
  //   name: '',
  //   family: '',
  //   age: 0,
  //   image: '',
  //   emoji: '',
  //   message: '',
  //   role: 'fighter',
  //   isAlive: false,
  //   metadata: {},
  // };
  const speakers: Array<iCharacter> = [];
  const showMessage: boolean = false;
  const [characters, setCharacters] = useState(initialState);
  const [speakersData, setSpeaker] = useState(speakers);
  const [showMessageData, setShowMessage] = useState(showMessage);

  useEffect(() => {
    setCharacters(initialState);
    // FIXME: This should include a call to an api. Otherwise is stupid. The code below is an example of Alejandro's code.
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
    const speaker = characters.find((character) => character.id === id);
    setSpeaker([...speakersData, speaker as iCharacter]);
    setShowMessage(true);
    setInterval(() => {
      setShowMessage(false);
    }, 2500);
  };

  return {
    characters,
    speakersData,
    killCharacter,
    speakCharacter,
    showMessageData,
  };
}
