import React from 'react'
import {useState } from 'react'
import { useContext } from 'react';
import GeneralContext from './utils/GeneralContext';


function Form() {
    
    const { 
        setformOpen,
        formOpen
       } = useContext(GeneralContext);

function formSubmithandler(){
  alert("enviar datos")
    
}

  return (
    <div>
      <h1>Información de piso</h1>
      <input type="text" placeholder='Superficie'/>
      <input type="text" placeholder='habitaciones'/>
      <input type="text" placeholder='baño'/>
      <input type="text" placeholder='Api Key'/>
      <button type='submit' onSubmit={formSubmithandler}>ENVIAR</button>
    </div>
  )
}

export default Form
