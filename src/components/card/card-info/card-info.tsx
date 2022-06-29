import { iCharacter } from '../../../models/character';

export function CardInfo({
  character,
  children,
}: {
  character: iCharacter;
  children: JSX.Element;
}) {
  return (
    <div className="character__info">
      <ul className="list-unstyled">
        <li>Age: {character.age} years old</li>
        <li className="emoji">{character.emoji}</li>
        <li>{children}</li>
      </ul>
    </div>
  );
}
