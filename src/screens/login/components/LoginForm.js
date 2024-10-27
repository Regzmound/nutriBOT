import React from 'react'
import Button from '../../../components/button/Button'

function LoginForm() {
  return (
    <form action=""
    className='login-form'>
        <input type="text" placeholder='Email' id='email'/>
        <input type="password" placeholder='Password' id='pass'/>
        <a href="" className='forgot-pass'><span>Forgot Password?</span></a>
        <Button label={"Login"} onButtonClick={()=>{}}/>
    </form>
  )
}

export default LoginForm