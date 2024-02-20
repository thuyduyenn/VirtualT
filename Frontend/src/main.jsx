import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AllContextProvider } from "./context/allContext"
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <BrowserRouter>
         <AllContextProvider>
             <App />
         </AllContextProvider>
       </BrowserRouter>
  </React.StrictMode>,
)
