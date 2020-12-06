import React from 'react';
import './assets/css/App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component{

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {

    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newtasks = this.state.tasks.filter(task => task.id != id)
    this.setState({tasks: newtasks})
  }

  checkDone = (id) => {
    const newtasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    })
    this.setState({tasks: newtasks})

  }

    render(){

      return(
        <div>
          <TaskForm addTask = {this.addTask}/>
          <Tasks 
            tasks = { this.state.tasks } 
            deleteTask = { this.deleteTask }
            checkDone = { this.checkDone }/>
        </div>
      )
    }
}
export default App;
