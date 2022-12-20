import React from "react";
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { id_sentence } from "./Sentences";
export var  value1= 0;
export var  value2= 0;
export var  value3=0;
export var  value4=0;
const id=id_sentence;
const Votos = () => {
    const helper = (e,o,t,th,f) => {
        if(e===id_sentence){
            console.log(id_sentence);
            value1=o;
            value2=t;
            value3=th;
            value4=f;
            console.log(value1,value2,value3,value4);
        }

    
      };
  const [votos, setVotos] = useState([]);

  useEffect(() => {
    const fetchAllVotos = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/votos2/${id_sentence}`);
        setVotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllVotos();
  }, []);

  console.log(votos);
  console.log(id_sentence+"id");


  return (
    <div className="App-header">
      <h2>Votaciones</h2>
      <table >
        <thead>
          <tr>
          <th className="votos">Oración</th>
            <th className="votos">Respuesta racista  </th>
            <th className="votos">Respuesta machista  </th>
            <th className="votos">Respuesta ofensiva  </th>
            <th className="votos">Respuesta no_ofensiva</th>
          </tr>
        </thead>
        <tbody>
        {votos.map((voto) => (
          <tr key={voto.codigo} onChange={helper(voto.codigo,voto.respuesta_racista,voto.respuesta_machista,voto.respuesta_ofensiva,voto.respuesta_no_ofensiva)} className="voto" >
            <td >{voto.oraciones}</td>
            <td className="voto">{value1= voto.respuesta_racista}</td>
            <td className="voto">{value2= voto.respuesta_machista}</td>
            <td className="voto">{value3= voto.respuesta_ofensiva}</td>
            <td className="voto">{value4= voto.respuesta_no_ofensiva}</td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  );
};

export default Votos;