import { useContext } from 'react';
import { CharactersContext } from '../../context/context-context';

export function Communications() {
  const { speakersData, showMessageData } = useContext(CharactersContext);

  let speaker = speakersData[speakersData.length - 1];

  // const handleChange = () => (showMessageData ? ' on' : '');

  if (speaker) {
    return (
      <div
        className="comunications on"
        // onChange={handleChange}
      >
        <p className="comunications__text display-1">{speaker.message}</p>
        <img
          className="comunications__picture"
          src={speaker.image}
          alt={speaker.name + ' ' + speaker.family}
        />
      </div>
    );
  }
  return <div className="communications"></div>;
}

/* 

import { useContext } from 'react';
import { CharactersContext } from '../../context/context-context';

export function Communications() {
  const { speakersData, showMessageData } = useContext(CharactersContext);

  let speaker = speakersData[speakersData.length - 1];

  const toggleClass = showMessageData ? ' on' : '';

  if (speaker) {
    return (
      <div className={`communications on ${toggleClass}`}>
        <p className="comunications__text display-1">{speaker.message}</p>
        <img
          className="comunications__picture"
          src={speaker.image}
          alt={speaker.name + ' ' + speaker.family}
        />
      </div>
    );
  }
  return <div className={toggleClass}></div>;
}



*/
