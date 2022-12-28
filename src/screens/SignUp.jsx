import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const registerUser =async (e)=>{
      e.preventDefault()
      const response = await fetch("http://localhost:5000/api/register",{
        method:'POST',
        headers:{
          'Content_Type':'application/json',
        },
        body:JSON.stringify({
          name,email,password
        })
      })
      const data = await response.json()
      console.log(data)
      if(data.status ==='ok'){
        navigate('/login')
      }
    }

  return (
    <div>
        <div>
            <form onSubmit={registerUser}>
            <input type="text" value= {name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Register" />
            </form>
        </div>
    </div>
  )
}

export default SignUp