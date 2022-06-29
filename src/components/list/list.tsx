import { useContext } from 'react';
import { CharactersContext } from '../../context/context-context';
import { Card } from '../card/card';

export function List() {
  const { characters } = useContext(CharactersContext);
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
