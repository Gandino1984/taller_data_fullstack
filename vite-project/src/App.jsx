import { useState, useContext} from 'react'
import './App.css'
import Form from './Form'
import { enviarTasacion } from './api/apiTasador'
import StatesProvider from './utils/StatesProvider'
import GeneralContext from './utils/GeneralContext'
function App() {
  
  const { 
    setformOpen,
    formOpen
   } = useContext(GeneralContext);


   function appClickhandler(){
    if(formOpen){
      setformOpen(false)
    }else{
      setformOpen(true)
    }
    
   }

  return (
   
      <div className='appContainer'>
        <h1>App</h1>
        <button type='button' onClick={appClickhandler}>INICIAR</button>
        {formOpen && <Form/>}
      </div>



    
    
  )
}

export default App
