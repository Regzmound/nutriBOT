import React, { useState } from 'react'
import Button from '../../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassVisibility = () => {
      setShowPassword(!showPassword)
    }
  return (
    <form action=""
    className='signup-form'>
        <div className='input-container'>
          <FontAwesomeIcon icon={faUser} className='leading-icon'/>
        <input type="text" placeholder='Username' id='username'/>
        </div>
        <div className='input-container'>
          <FontAwesomeIcon icon={faEnvelope} className='leading-icon'/>
        <input type="text" placeholder='Email' id='email'/>
        </div>
        <div className='input-container'>
        <FontAwesomeIcon icon={faLock} className='leading-icon'/>
        <input type={showPassword ? "text": "password"} placeholder='Password' id='pass'/>
        </div>
        <div className='input-container'>
        <FontAwesomeIcon icon={faLock} className='leading-icon'/>
        <input type={showPassword ? "text": "password"} placeholder='Confirm Password' id='c-pass'/>
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='eyecon'onClick={togglePassVisibility}/>
        </div>
        <Button label={"Signup"} onButtonClick={()=>{}}/>
        <p className='no-acc'>Already have an account? <a href="/login">Login</a></p>
    </form>
  )
}

export default SignupForm