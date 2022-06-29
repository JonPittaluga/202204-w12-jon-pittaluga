import { iCharacter } from '../../models/character';
import { StatusBtn } from './card-status/status';
import { ActionBtn } from './card-actionBtn/actionBtn';
import { CardOverlay } from './card-overlay/card-overlay';
import { CardInfo } from './card-info/card-info';
import { CardName } from './card-name/card-name';
import { CardImage } from './card-image/card-image';

import { useContext } from 'react';
import { CharactersContext } from '../../context/context-context';

export function Card({ character }: { character: iCharacter }) {
  const { killCharacter, speakCharacter } = useContext(CharactersContext);

  // Método para eliminar personaje con kill, recibiendo ID.
  const handleKill = () => {
    killCharacter(character.id as number);
  };

  const handleSpeak = () => {
    speakCharacter(character.id as number);
  };

  const getMetadata = () => {
    // FIXME: Only renders the first item in the object. It should render two in many cases.
    // let keys = Object.keys(character.metadata);
    // let entries = Object.entries(character.metadata);
    // for (let data in keys) {
    //   return (
    //     <>
    //       <li>
    //         {keys[data]}: {entries[data][1]}
    //       </li>
    //     </>
    //   );
    // }

    if (character.role === 'fighter') {
      return (
        <>
          <li>Dexterity: {character.metadata['Dexterity']}</li>
          <li>Weapon: {character.metadata['Weapon']}</li>
        </>
      );
    }
    if (character.role === 'king') {
      return <li>Years of reign: {character.metadata['Years of reign']}</li>;
    }
    if (character.role === 'squire') {
      return <li>Brownnose level: {character.metadata['Brown nose level']}</li>;
    }
    if (character.role === 'advisor') {
      return <li>Counsels: {character.metadata['Counseler of']}</li>;
    }
  };

  return (
    <>
      <li className="character col" key={character.id}>
        <div className="card character__card">
          <CardImage character={character} />
          <div className="card-body">
            <CardName character={character} />
            <CardInfo character={character}>
              <StatusBtn isAlive={character.isAlive} />
            </CardInfo>
            <CardOverlay getMetadata={getMetadata}>
              <ActionBtn text="speak" id={character.id} action={handleSpeak} />
              <ActionBtn action={handleKill} text="kill" id={character.id} />
            </CardOverlay>
          </div>
          <i className="emoji"></i>
        </div>
      </li>
    </>
  );
}
