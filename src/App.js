import './assets/css/App.css';

//Importo componentes

import MiComponente from './components/MiComponente.js';

function HelloWorld(props){
  

  return(

    <div id="hellow">
        {props.mytext}
    </div>

  );
}

function App() {

  return (
    <div className="App">
      <HelloWorld mytext = "PutoHola Mundo"/>
      <MiComponente/>
    </div>
  );
}

export default App;
