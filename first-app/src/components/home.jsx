import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const home = () => {
    const [count, setCount] = useState(0);
    // let num =1;
    // const add = () =>{
    //     num+=1;
    //     console.log(num);
    // }
    const add = () =>{
        // let num=count;
        // setCount(num+1);
        setCount((prev)=>{
            return prev+1;
        })
    }
  return (
    <div>
      <h1>Home</h1>
      <p>{count}</p>
      <button onClick={add}>Increment</button>
      <Link to="/info">Info</Link>
    </div>
  )
}

export default home
