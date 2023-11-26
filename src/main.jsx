import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/index.css'

//components
import App from './components/App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
