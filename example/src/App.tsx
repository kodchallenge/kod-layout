import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import KodLayout from '@kod-layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <KodLayout.Base>
        <KodLayout.Header />
        <KodLayout.Sidebar />
        <KodLayout.Row>
          <KodLayout.Tab />
          <KodLayout.Tab />
        </KodLayout.Row>
        <KodLayout.Footer />
      </KodLayout.Base>
    </div>
  )
}

export default App
