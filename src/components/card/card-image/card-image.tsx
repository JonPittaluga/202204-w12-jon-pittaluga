import { iCharacter } from '../../../models/character';
export function CardImage({ character }: { character: iCharacter }) {
  if (character.isAlive) {
    return (
      <img
        className="character__picture card-img-top"
        src={character.image}
        alt={character.name}
      />
    );
  } else {
    return (
      <img
        className="character__picture card-img-top isDead"
        src={character.image}
        alt={character.name}
        style={{ filter: 'grayscale(100%)' }}
      />
    );
  }
}
