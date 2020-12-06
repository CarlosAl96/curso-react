import React from 'react';


class TaskForm extends React.Component{

    state = {
        title: '',
        description: '' 
    }
    onSubmit = (event) => {

        this.props.addTask(this.state.title, this.state.description)
        event.preventDefault()
        
    }

    onChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){

        return(

            <form onSubmit={this.onSubmit}>
                <input 
                    name = 'title'
                    type = 'text' 
                    placeholder = 'Write a Task' 
                    onChange={this.onChange} 
                    value={this.state.title}></input>
                <br/>
                <textarea 
                    name = 'description'
                    placeholder='Write a Description' 
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <br/>
                <input type='submit' />
            </form>
        )
    }

}

export default TaskForm;