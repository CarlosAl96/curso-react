import React from 'react';
import './assets/css/App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component{

  state = {
    tasks: tasks
  }

    render(){

      return(
        <div>
          <TaskForm/>
          <Tasks tasks = { this.state.tasks }/>
        </div>
      )
    }
}
export default App;
