import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './assets/app.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Vite + React</h1>
    </div>
  )
}

export default App