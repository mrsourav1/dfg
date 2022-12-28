import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {

  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const loginUser = async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/login/",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)

    if(data.user){
      // localStorage.setItem('token')
      alert("Login successful")
      window.location.href = '/'
    }else{
      alert("Invalid Inforamtion")
    }
  }



  return (
    <div className='login_page'>
      <div className='login_form'>
        <form className='login_box' onSubmit={loginUser}>
          <div className='google_signIn'>
            <input className='google_button' type="submit" value="Sign In With Google" />
          </div>
          <p>-------or--------</p>
          <div className='email_area'>
            <input type="text" className='email_text' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
          </div>
          <div className='password_area'>
            <input type="password" className='password_text' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
          </div>
          <div className='submit_area'>
            <input className='login_button' type="submit" value="Login" />
          </div>
          
          <p style={{fontWeight:""}}>Forget Password? <span><a href="#">password reset</a></span></p>
          <p>New User?<span><Link to="/signup">SignUp</Link></span></p>
        </form>
      </div>
    </div>
  )
}

export default Login