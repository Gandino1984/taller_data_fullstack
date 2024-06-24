import React from 'react'
import {useState } from 'react'
import { useContext } from 'react';
import GeneralContext from './utils/GeneralContext';
import { enviarTasacion } from './api/apiTasador';


function Form() {


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
        'x-api-key': 'test_5ghbr8UdgVwCLyp4VdGjhHVziFm4dcV0b974Xtni',
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
    <div>
      <h1>Información de piso</h1>
      <input type="number" min='1' placeholder='Superficie'/>
      <input type="number" min='1' placeholder='habitaciones'/>
      <input type="number" min='1' placeholder='baño'/>
      <input type="text" placeholder='Api Key' value='test_5ghbr8UdgVwCLyp4VdGjhHVziFm4dcV0b974Xtni'/>
      <button type='button' onClick={tasacion} >ENVIAR</button>
    </div>
  )
}

export default Form
