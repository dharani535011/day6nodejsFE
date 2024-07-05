import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Logincontext from './Context/LoginContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <Logincontext><App /></Logincontext>
    
  ,
)
