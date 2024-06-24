import React, { useEffect } from 'react'
import {useState } from 'react'
import { useContext } from 'react';
import GeneralContext from './utils/GeneralContext';
import './Form.css'

function Form() {
  const [dato, setDato] = useState('')

  const { 
    tasar,
    setTasar
   } = useContext(GeneralContext);

   async function enviarTasacion(data) {



    fetch('http://unema.es:5000/api/predict', data)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
        return data.json();
        }).then(update => {
        console.log(update);
        setTasar(update.predicted_price)
        }).catch(e => {
        console.log(e);
        });
        

  }

  async function tasacion(e){

    const surface = e.target.parentElement.childNodes[1].value
    const bedrooms = e.target.parentElement.childNodes[2].value
    const restrooms = e.target.parentElement.childNodes[3].value

    const tasacionArray = {'surface': surface,
                          'bedrooms': bedrooms, 
                          'restrooms': restrooms}
                      
    const data = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'test_5ghbr8UdgVwCLyp4VdGJhHVziFm4dcV0b974Xtni',
    },

      body: JSON.stringify(tasacionArray),
    };
    
    
    const tasacionArrayEnviar = await enviarTasacion(data)


  }




    const { 
        setformOpen,
        formOpen
       } = useContext(GeneralContext);


  return (
    <div className='formContainer'>
        <div className='form'>
            <h1>Información de piso</h1>
            <input type="number" min='1' placeholder='Superficie'/>
            <input type="number" min='1' placeholder='habitaciones'/>
            <input type="number" min='1' placeholder='baño'/>         
            <button type='button' onClick={tasacion} >ENVIAR</button>
        </div>
        <h2>{tasar}</h2>
    </div>
  )
}

export default Form
