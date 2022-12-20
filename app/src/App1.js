
import './App.css';
import Sentences from './Sentences.js';
import Votos from './Votos.js';
import { respuesta } from './Sentences.js';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


function App() {
  const [botonActivo1, setBotonActivo1] = useState(false);
  const [botonActivo2, setBotonActivo2] = useState(false);
  const [botonActivo3, setBotonActivo3] = useState(false);
  const [botonActivo4, setBotonActivo4] = useState(false);
  const comRas = () => {
    console.log(respuesta)
    if(respuesta==="Comentario racista"){
      setBotonActivo1(true)
    }
  };
  const comMac = () => {
    console.log(respuesta)
    if(respuesta==="Comentario machista"){
      setBotonActivo2(true)
    }
  };
  const comOfe = () => {
    console.log(respuesta)
    if(respuesta==="Comentario ofensivo"){
      setBotonActivo3(true)
    }
  };
  const comNoO = () => {
    console.log(respuesta)
    if(respuesta==="Comentario no ofensivo"){
      setBotonActivo4(true)
    }
  };
  return (
    <div className="App">
    
      <header className="App-header">
          
        <div>
          Selecciona la oracion que mejor describa la siguiente expresion:
        </div>
        <div  >
          <Sentences ></Sentences>
        </div>
        
        <div className='bnt'>
          <button className='bnt' id='Comentario racista' onClick={event =>comRas()} disabled={botonActivo1}>Comentario racista</button>
          <button className='bnt' id='Comentario machista' onClick={event =>comMac()} disabled={botonActivo2}>Comentario machista</button>
        </div>
        <div className='bnt' >
          <button className='bnt' id='Comentario ofensivo' onClick={event =>comOfe()} disabled={botonActivo3}  >Comentario ofensivo</button>
          <button className='bnt' id='Comentario no ofensivo' onClick={event =>comNoO()} disabled={botonActivo4}>Comentario no ofensivo</button>
        </div>
        <div  >
          <button className='bnt_1' onClick={event => window.location.reload()}>Probar otro comentario</button>
          <button className='bnt_1'><Link className='bnt_1' to='/second'>Probar modo votación</Link></button>
        </div>

      </header>
          
          
    </div>
  );
}

export default App;
