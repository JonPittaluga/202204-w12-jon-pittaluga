import { iCharacter } from '../../../models/character';

export function CardName({ character }: { character: iCharacter }) {
  return (
    <h2 className="character__name card-title h4">
      {character.name} {character.family}
    </h2>
  );
}
