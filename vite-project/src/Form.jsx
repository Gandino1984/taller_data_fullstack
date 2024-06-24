import React from 'react'

// superficie
// habitaciones
// baño

function Form() {
  return (
    <div>
      <h1>Información de piso</h1>
      <input type="text" placeholder='Superficie'/>
      <input type="text" placeholder='habitaciones'/>
      <input type="text" placeholder='baño'/>
      <input type="text" placeholder='Api Key'/>
      <button type='submit'>ENVIAR</button>
    </div>
  )
}

export default Form
