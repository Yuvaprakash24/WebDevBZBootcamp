import React, { useState } from 'react'

const form = () => {
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    function alertfun(){
        alert(user+":"+password)
    }
    function username(v){
        setUser(v.target.value)
        console.log(user)
    }
    function passcode(p){
        setPassword(p.target.value)
        console.log(password)
    }
  return (
    <div>
      <h3>Fill the form</h3>
      <h4>Username</h4>
      <input type="text" onChange={username} value={user} placeholder='username'/>
      <h4>Password</h4>
      <input type="password" name="" onChange={passcode} value={password} placeholder='password'/><br />
      <button onClick={alertfun}>SUBMIT</button>
    </div>
  )
}

export default form
