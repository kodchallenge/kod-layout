import KodLayout from '@kod-layout'
import { useState } from 'react'
function App() {

  return (
    <div className="App">
      <KodLayout.Base>
        <KodLayout.Header>
          This is Header
        </KodLayout.Header>
        {/* <KodLayout.Sidebar /> */}
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
