import React from 'react'
import { useState } from 'react'
const counter = () => {
    const [count,setCount] = useState(15)
    const add = () =>{
        setCount((prev)=>{
            return prev+1;
        })
    }
    const sub = () =>{
        setCount((next)=>{
            return next-1;
        })
    }
  return (
    <div>
      <button onClick={sub}>Decrement</button>
      <h5>{count}</h5>
      <button onClick={add}>Increment</button>
    </div>
  )
}

export default counter
