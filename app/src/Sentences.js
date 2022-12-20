import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Votos2 from './Votos2.js';

import axios from "axios";
export var respuesta="";
export var id_sentence="";

const Sentences = () => {
   
  const [sentence, setSentence] = useState([]);

  useEffect(() => {
    const fetchAllSentences = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setSentence(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllSentences();
  }, []);

  console.log(sentence);


  return (
      <div className="sentences">
        {sentence.map((sentences) => (
            <div key={sentences.codigo} className="sentence">
            <p>{sentences.oracion}</p>
            <p hidden> {id_sentence=sentences.codigo}</p>
            <p hidden> {respuesta=sentences.respuesta}</p>
            <p hidden><Votos2></Votos2></p>
            </div>  
          ))}
      </div>
  );
};

export default Sentences;