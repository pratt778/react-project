import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <h1 className='text'>{count}</h1>
      <div className="btns">
      <button className='btn inc' onClick={()=>{setCount(count+1)}}>+</button>
      <button className='btn rst' onClick={()=>{setCount(0)}}>Reset</button>
      <button className='btn dec' onClick={()=>{setCount(count-1)}}>-</button>
      </div>
    </div>
      
    </>
  )
}

export default App
