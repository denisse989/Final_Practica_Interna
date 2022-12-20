import * as React from 'react';
import './App.css';
import { respuesta } from './Sentences';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const ButtonS = (props) => {

  return (
    <div>
      <Button >{props.text}</Button>
    </div>
  );
};


const Button = (props,{ onClick, children }) => {
  console.log(props);
  console.log(respuesta);
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
    return (
      <div>
        {sentence.map((sentences) => (
        <div key={sentences.codigo} className="sentence">
        <p hidden>{sentences.oracion}</p>
        <p hidden> {sentences.respuesta}</p>
        <button   type="button" className='bnt' onClick={onClick}>
        {children} {props.text}
        </button>
        </div>  
      ))}
      </div>
      
      
    );
  
};

export default Button;