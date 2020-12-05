import React from 'react';


class TaskForm extends React.Component{

    state = {
        titulo: '',
        descripcion: '' 
    }
    onSubmit = (event) => {

        console.log('enviando')
        event.preventDefault();
        
    }

    onChange = (event) => {

        console.log(event.target.value)
    }

    render(){

        return(

            <form onSubmit={this.onSubmit}>
                <input 
                    type = 'text' 
                    placeholder = 'Write a Task' 
                    onChange={this.onChange} 
                    value={this.state.titulo}></input>
                <br/>
                <textarea 
                    placeholder='Write a Description' 
                    onChange={this.onChange} 
                    value={this.state.descripcion}/>
                <br/>
                <input type='submit' />
            </form>
        )
    }

}

export default TaskForm;