import React from 'react';
import '../styles/Boton.css'

/*function Boton(props){
    return(
        <button>
            {props.texto}
        </button>
    );*/
   //Sintaxis desestructurada, lo más usado
   
    /* function Boton_old({ texto, esBotonDeClic, manejarClic }){
        return(  
            <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClic}>
            {texto}
            </button>
        );
    }*/

    function Boton({ texto, esBotonDeClic, esBotonDeClic1, manejarClic }){
        return(  
            <button className={ esBotonDeClic ? 'boton-clic' : esBotonDeClic1 ? 'boton-clicMin' :'boton-reiniciar' } onClick={manejarClic}>
            {texto}
            </button>
        );
    }

export default Boton;