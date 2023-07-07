import './App.css';
import fcclogo from './images/fcc_primary.jpg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
 
 const [numClics, setNumClics] = useState(0);
 const [numClics2, setNumClics2] = useState(0);

 const [player1] = useState('AZUL');
 const [player2] = useState('ROJO');
 
//----Sumar Contadores
 const manejarClic = () => {
    console.log('Clic');
    setNumClics(numClics+1);
 }
 
 const manejarClic2 = () => {
  console.log('Clic 2');
  setNumClics2(numClics2+1);
}

//--Restar contadores
const manejarClicMin = () => {
  console.log('Clic Min');
  if (numClics !=0)
  setNumClics(numClics-1);
}

const manejarClicMin2 = () => {
  console.log('Clic 2 Min');
  if (numClics2 !=0)
  setNumClics2(numClics2-1);
}


//---Reiniciar contadores
 const reiniciarClic = () => {
    console.log('Reiniciar');
    setNumClics(0);
 }

 const reiniciarClic2 = () => {
  console.log('Reiniciar 2');
  setNumClics2(0);
}

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='fcc-logo' src={fcclogo} alt='logo de FCC'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics = {numClics} player = {player1}/>
        <Boton texto='Punto +' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton texto='Punto -' esBotonDeClic1={true} manejarClic={manejarClicMin} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarClic} />
     </div>
     
     <div className='contenedor-principal'>
        <Contador numClics = {numClics2} player = {player2} />
        <Boton texto='Punto +' esBotonDeClic={true} manejarClic={manejarClic2} />
        <Boton texto='Punto -' esBotonDeClic1={true} manejarClic={manejarClicMin2} />
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarClic2} />
     </div>

    </div> 
    
  );
  
}

export default App;
