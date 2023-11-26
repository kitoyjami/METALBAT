import { useState } from 'react'
import '../styles/App.css'
import Headers from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
    </>
  )
}

export default App
