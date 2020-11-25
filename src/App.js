import logo from './logo.svg';
import './assets/css/App.css';

//Importo componentes

import MiComponente from './components/MiComponente.js';

function App() {

  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MiComponente />

      </header>
    </div>
  );
}

export default App;
