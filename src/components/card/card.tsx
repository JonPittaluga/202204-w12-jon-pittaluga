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
    // Fixme: Object.keys me devuelve un array de strings con las propiedades del objeto
    if (character.role === 'fighter') {
      return (
        <>
          <li>Dexterity: {character.metadata.dexterity}</li>
          <li>Weapon: {character.metadata.weapon}</li>
        </>
      );
    }
    if (character.role === 'king') {
      return <li>Years of reign: {character.metadata.yearsOfReign}</li>;
    }
    if (character.role === 'squire') {
      return <li>Brownnose level: {character.metadata.brownNose}</li>;
    }
    if (character.role === 'advisor') {
      return <li>Counsels: {character.metadata.counselOf}</li>;
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
