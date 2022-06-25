import { iCharacter } from '../../models/character';
import { Card } from '../card/card';

export function List({ characters }: { characters: Array<iCharacter> }) {
  return (
    <>
      <ul className="characters-list row list-unstyled">
        {characters.map((item) => (
          <Card character={item}></Card>
        ))}
      </ul>
    </>
  );
}
