import { useState } from 'react'
import '../styles/App.css'
import Headers from '../components/Header'
import Paths from '../routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers/>
      <Paths />
    </>
  )
}

export default App
