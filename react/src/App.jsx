import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaUserAstronaut } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='bg-gradient-to-r from-indigo-500 to-red-800 rounded-md shadow-md shadow-indigo-500 '>
       <h1 className=''>holaaaaaaa</h1>

        </div>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>
      <FaUserAstronaut />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

}

export default App