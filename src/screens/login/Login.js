import React from 'react'
import "./Login.css"
import LoginForm from './components/LoginForm'

function Login() {
  return (
   <div className='container'>
     <div className='login-container'>
        <center>
          <img src="images/Logo.png" alt="Logo" className='logo'/>
          <h1 className='label'>NUTRI<span>BOT</span></h1>
          <LoginForm/>
        </center>
        </div>
   </div>
  )
}

export default Login