import { useState } from 'react'
import './styles/sky.scss';
import Intro from './pages/Intro/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro />
   
    </div>
  )
}

export default App
