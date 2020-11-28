import React from 'react';
import './assets/css/App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

class App extends React.Component{

  state = {
    tasks: tasks
  }

    render(){

      return(
        <Tasks tasks = { this.state.tasks }/>
      )
    }
}
export default App;
