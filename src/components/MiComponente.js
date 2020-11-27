import React from 'react';
import '../assets/css/MiComponente.css'

class MiComponent extends React.Component{

    state = {
        show: true
    }
    
    render(){

        
        /*let persona = {
            nombre: 'Carlos',
            apellido: 'Ceballo',
            ocupaciones: [ 'estudiante', 'emprendedor'],
            edad: '24'
        };*/

        if(this.state.show){
        
            return(

                <React.Fragment id = "componente">
                    
                    <h1>{this.props.mytxt}</h1>

                </React.Fragment>
            );
        }else{
            return <h1>Error 404 NOT FOUND</h1>;
        }
    }

}



export default MiComponent;