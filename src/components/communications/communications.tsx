import { useContext } from 'react';
import { CharactersContext } from '../../context/context-context';

export function Communications() {
  const { characters, speaker, speakCharacter } = useContext(CharactersContext);
  speakCharacter(speaker);

  if (speaker !== 0) {
    return (
      <div className="comunications on">
        <p className="comunications__text display-1">
          {characters[speaker].message}
        </p>
        <img
          className="comunications__picture"
          src={characters[speaker].image}
          alt={characters[speaker].name + ' ' + characters[speaker].family}
        />
      </div>
    );
  }
  return <div className="communications"></div>;
}
