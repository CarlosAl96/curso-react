import './assets/css/App.css';

//Importo componentes

import MiComponent from './components/MiComponente.js';

function App() {

  return (
    <div className="App">
      <MiComponent mytxt = "Hola "/>
      <MiComponent mytxt = "como "/>
      <MiComponent mytxt = "estas? "/>
    </div>
  );
}

export default App;
