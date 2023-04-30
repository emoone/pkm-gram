import './styles/main.css';

import { ModalContainer } from './lib/modal';
import RootRoutes from './modules/RootRoutes';

function App() {
  return (
    <div className="App">
      <RootRoutes />
      <ModalContainer />
    </div>
  );
}

export default App;
