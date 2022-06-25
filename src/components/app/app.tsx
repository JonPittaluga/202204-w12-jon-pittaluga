import { useState } from 'react';
import { iCharacter } from '../../models/character';
import { List } from '../list/list';
import { dataStatic } from '../../data/data-static';

function App() {
  const initialState: Array<iCharacter> = dataStatic;
  //   const [listState, setList] = useState(initialState);

  return (
    <>
      <div className="container">
        <List characters={initialState}></List>
      </div>
    </>
  );
}

export default App;
