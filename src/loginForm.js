import React from 'react'
import { useState } from 'react'
export  const LoginForm = ({existingUsersArr, setStatus, setShowStatus,status, setpage}) => {
  
  const [loginData, setLoginData]=useState({

    
    userName:'',
    password:'',

  })
  const checkData=(x)=>{
    console.log(status)
    setShowStatus(true)
    setpage(-1)
    
    for(let i=0; i<existingUsersArr.length;i++){
      if(existingUsersArr[i].userName===x.userName && existingUsersArr[i].password===x.password ){
        console.log('Success');
        setStatus(true)
        
        break;
      }
      else{
        console.log('fail')
        setStatus(false)
      }
    }
  }

  
  return (
    <div className='form'>
      LoginForm
      <div>User Name:<input type="text" onChange={(e)=>{setLoginData({...loginData,  userName:e.target.value})}}></input></div>
      <div>Password:<input type="text" onChange={(e)=>{setLoginData({...loginData, password:e.target.value})}}></input></div>
      
      <div><button onClick={()=>checkData(loginData)}>Login</button></div>
    </div>
  )
}

// export default  LoginForm;