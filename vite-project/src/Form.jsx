import React from 'react'
import {useState } from 'react'
import { useContext } from 'react';
import GeneralContext from './utils/GeneralContext';
import { enviarTasacion } from './api/apiTasador';
import './Form.css'

function Form() {
  async function tasacion(e){
    const tasacionArray = {'surface': '',
      'bedrooms': '', 
      'restrooms': ''}
  
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

    function formSubmithandler(){
    alert("enviar datos")   
    }

    function formClosehandler(){
      setformOpen(false)        
    }

  return (
    <div className='formContainer'>
        <div className='form'>
            <div className='titleContainer'>
                <p>Información de piso</p>
                <button className='closeFormBtn' onClick={formClosehandler}><ion-icon name="close-outline"></ion-icon></button>
            </div>
            <input type="number" placeholder='Superficie'/>
            <input type="number" placeholder='habitaciones'/>
            <input type="number" placeholder='baño'/>
            <input type="number" placeholder='Api Key'/>
            
            <button type='button' onClick={tasacion} onSubmit={formSubmithandler}>ENVIAR</button>
        </div>
    </div>
  )
}

export default Form
