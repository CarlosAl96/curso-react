/*import React from 'react';
import '../assets/css/MiComponente.css'

class MiComponent extends React.Component{

    state = {
        show: true
    }
    
    cambiarEstado = () => {

        this.setState({ show : !this.state.show })
    }

    render(){

        
        let persona = {
            nombre: 'Carlos',
            apellido: 'Ceballo',
            ocupaciones: [ 'estudiante', 'emprendedor'],
            edad: '24'
        };

        if(this.state.show){
        
            return(

                <div className = "componente">
                    
                    <h1>{this.props.mytxt}</h1>

                    <button onClick={ this.cambiarEstado }>SHOW</button>

                </div>
            );
        }else{
            return (
                <div className = "componente" >
                    <h1>Error 404 NOT FOUND</h1>
                    <button onClick={ this.cambiarEstado }>SHOW</button>
                </div>
            );
        }
    }

}



export default MiComponent;*/