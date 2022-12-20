import React from "react";
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Votos = () => {
  const [votos, setVotos] = useState([]);

  useEffect(() => {
    const fetchAllVotos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/votos");
        setVotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllVotos();
  }, []);

  console.log(votos);

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
          <tr key={voto.codigo} className="voto" >
            <td className="voto">{voto.oraciones}</td>
            <td className="voto">{voto.respuesta_racista}</td>
            <td className="voto">{voto.respuesta_machista}</td>
            <td className="voto">{voto.respuesta_ofensiva}</td>
            <td className="voto">{voto.respuesta_no_ofensiva}</td>
          </tr>
        ))}

        </tbody>
      </table>
    </div>
  );
};

export default Votos;