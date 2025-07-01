import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage></HomePage>
      <div className='Container bg-red-500'>
        <h1> Hello </h1>
      </div>

    </>
  )
}

export default App
