import { useState } from 'react'
import './App.css'
import Home from './component/home'
import Friends from './component/friends'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Friends></Friends>
     <Home></Home>
      <h1>Vite + React</h1>
     
    </>
  )
}

export default App
