import { useCharacters } from '../hooks/useCharacters';
import { CharactersContext } from './context-context';

export function ContextProvider({
  children,
}: {
  children: Array<JSX.Element>;
}) {
  const context = useCharacters();
  return (
    <CharactersContext.Provider value={context}>
      {children}
    </CharactersContext.Provider>
  );
}
