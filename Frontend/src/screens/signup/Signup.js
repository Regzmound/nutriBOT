import React from 'react'
import './Signup.css'
import SignupForm from './components/SignupForm'

function Signup() {
  return (
    <div className='container'>
     <div className='signup-container'>
        <center>
          <img src="images/Logo.png" alt="Logo" className='logo'/>
          <h1 className='label'>NUTRI<span>BOT</span></h1>
          <SignupForm/>
        </center>
        </div>
   </div>
  )
}

export default Signup