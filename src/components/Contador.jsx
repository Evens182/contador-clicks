import React from 'react';
import '../styles/Contador.css'

function Contador({ numClics, player}){

        return (
            <div>
                <h1>{player}</h1>
                <div className='contador'>
                 {numClics}
                </div>
            </div>
        );
}

export default Contador;