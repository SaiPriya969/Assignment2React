import React from 'react'
import { useState } from 'react'
const RegForm = ({register}) => {
    const [data, setdata]=useState({
     
        userName:'',
        password:'',
        
      })
  return (
    <div>
      registrationForm
      <div className='form'>
        <div>Name:<input type="text"></input></div>
        <div>User Name:<input type="text" onChange={(e)=>{setdata({...data, userName:e.target.value})}}></input></div>
        <div>Email Id:<input type="text" ></input></div>
        <div>Password:<input type="text" onChange={(e)=>{setdata({...data, password:e.target.value})}}></input></div>
        <div><button onClick={()=>register(data)}>Register</button></div>
      </div>
    </div>
  )
}

export default RegForm