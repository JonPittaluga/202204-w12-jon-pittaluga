import { List } from '../list/list';
import { Communications } from '../communications/communications';
import { ContextProvider } from '../../context/context-provider';

function App() {
  return (
    <ContextProvider>
      <div className="container">
        <List></List>
      </div>
      <Communications />
    </ContextProvider>
  );
}

export default App;
