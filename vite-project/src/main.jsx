import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StatesProvider from './utils/StatesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <StatesProvider>
        <App />
     </StatesProvider>
  </React.StrictMode>,
)
