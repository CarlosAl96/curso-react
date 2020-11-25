import React from 'react';

class MiComponente extends React.Component{


    render(){

        let persona = {
            nombre: 'Carlos',
            apellido: 'Ceballo',
            ocupaciones: [ 'estudiante', 'emprendedor'],
            edad: '24'
        };

        return(

            <React.Fragment>
                <h1>{persona.nombre + ' ' + persona.apellido}</h1>
                <h2>Edad: {persona.edad}</h2>

                <ol>
                    {
                        persona.ocupaciones.map((ocupaciones, i) => {
                            return(

                            <li key = {i} >{ocupaciones}</li>
                            );
                        })
                    }
                </ol>

            </React.Fragment>
        );
    }

}

export default MiComponente;