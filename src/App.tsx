import './styles/main.css';

import { ModalContainer } from './libs/modal';
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
