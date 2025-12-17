import React from 'react'
import { useState } from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className='bg-gray-500 h-screen w-screen flex justify-center-safe items-center'>
      <div className='bg-cyan-100 p-2 rounded shadow-md'>
        <input type="text" className='bg-gray-400 rounded' placeholder='Enter your text' onChange={(e)=>setInputValue(e.target.value)}/>
        <p >your text will show here:-{inputValue}</p>
      </div>
      
    </div>
  )
}

export default App