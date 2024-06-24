import { useState } from 'react'
import './App.css'

import { enviarTasacion } from './api/apiTasador'

function App() {

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

  return (
    <>
      <div className='appContainer'>
        <h1>App</h1>
        <button onClick={tasacion}>INICIAR</button>
      </div>
    </>
  )
}

export default App
