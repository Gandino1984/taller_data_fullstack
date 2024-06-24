import { useState, useContext} from 'react'
import './App.css'
import Form from './Form'
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
        <h1>Introducir información de piso</h1>
        <div className='iniciarBtnAppContainer'>
            <button className='iniciarBtnApp' type='button' onClick={appClickhandler} >INICIAR</button>
        </div>
        {formOpen && <Form/>}
      </div> 
    
  )
}

export default App
