import './App.css';
import Sentences from './Sentences.js';
import Votos2, { value1, value2, value3, value4 } from './Votos2.js';
import { respuesta,id_sentence } from './Sentences.js';
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
export var r_racista=0;
export var r_machista=0;
export var r_noOfensiva=0;
export var r_ofensiva=0;

function App() {
  const [botonActivo1, setBotonActivo1] = useState(false);
  const [botonActivo2, setBotonActivo2] = useState(false);
  const [botonActivo3, setBotonActivo3] = useState(false);
  const [botonActivo4, setBotonActivo4] = useState(false);
  const [voto, setVotos] = useState({
    respuesta_racista: null,
    respuesta_machista: null,
    respuesta_ofensiva: null,
    respuesta_no_ofensiva: null,
  });
  const [error,setError] = useState(false)

  const votoId = id_sentence;

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res =await axios.put(`http://localhost:8800/votos/${votoId}`, voto);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  const comRas = (e) => {
    console.log(respuesta)
    if(botonActivo1===false &&botonActivo2===false&&botonActivo3===false&&botonActivo4===false){
        r_racista+=1;
        const value= r_racista;
        const name="respuesta_racista";
        console.log(r_racista);
        setBotonActivo1(true)
        setVotos((prev) => ({ ...prev,
          respuesta_racista:value1+1,
          respuesta_machista: value2,
          respuesta_ofensiva: value3,
          respuesta_no_ofensiva: value4,}
          
        ));
        console.log(value1,value2,value3,value4+"definitivo");

    }
  };
  const comMac = () => {
    console.log(respuesta)
    if(botonActivo1===false &&botonActivo2===false&&botonActivo3===false&&botonActivo4===false){
        r_machista+=1;
        setBotonActivo2(true)
        setVotos((prev) => ({ ...prev,
          respuesta_racista:value1,
          respuesta_machista: value2+1,
          respuesta_ofensiva: value3,
          respuesta_no_ofensiva: value4,}
          
        ));
    }
  };
  const comOfe = () => {
    console.log(respuesta)
    if(botonActivo1===false &&botonActivo2===false&&botonActivo3===false&&botonActivo4===false){
        r_ofensiva+=1;
      setBotonActivo3(true)
      setVotos((prev) => ({ ...prev,
        respuesta_racista:value1,
        respuesta_machista: value2,
        respuesta_ofensiva: value3+1,
        respuesta_no_ofensiva: value4,}
        
      ));
    }
  };
  const comNoO = () => {
    console.log(respuesta)
    if(botonActivo1===false &&botonActivo2===false&&botonActivo3===false&&botonActivo4===false){
        r_noOfensiva+=1;
      setBotonActivo4(true)
      setVotos((prev) => ({ ...prev,
        respuesta_racista:value1,
        respuesta_machista: value2,
        respuesta_ofensiva: value3,
        respuesta_no_ofensiva: value4+1,}
        
      ));
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
          <button className='bnt' id='Comentario racista' name='respuesta_racista' onClick= {event =>comRas()}  disabled={botonActivo1}  >Comentario racista</button>
          <button className='bnt' id='Comentario machista' onClick={event =>comMac()} disabled={botonActivo2}>Comentario machista</button>
        </div>
        <div className='bnt' >
          <button className='bnt' id='Comentario ofensivo' onClick={event =>comOfe()} disabled={botonActivo3}  >Comentario ofensivo</button>
          <button className='bnt' id='Comentario no ofensivo' onClick={event =>comNoO()} disabled={botonActivo4}>Comentario no ofensivo</button>
        </div>
        <div  >
          <button className='bnt_1' onClick={event => window.location.reload()}>Probar otro comentario</button>
          <button className='bnt_1' onClick={handleClick}><Link className='bnt_1' to='/votos'>Ver Votaciones</Link></button>
        </div>
      </header>
          
          
    </div>
  );
}

export default App;
