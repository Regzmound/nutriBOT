import React from 'react'
import Button from '../../../components/button/Button'

function LoginForm() {
  return (
    <form action=""
    className='login-form'>
        <input type="text" placeholder='Email' id='email'/>
        <input type="password" placeholder='Password' id='pass'/>
        <a href="" className='forgot-pass'><p>Forgot Password?</p></a>
        <Button label={"Login"} onButtonClick={()=>{}}/>
        <p className='no-acc'>Don&apos;t have an account? <a href="/signup">Signup</a></p>
    </form>
  )
}

export default LoginForm