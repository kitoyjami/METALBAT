import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/index.css'
import App from './pages/App'

//components

//Router

import Paths from './routes'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </React.StrictMode>,
)
