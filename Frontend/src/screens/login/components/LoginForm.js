import React, { useState } from 'react'
import Button from '../../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const togglePassVisibility = () => {
    setShowPassword(!showPassword)
  }
  const onLoginButtonClick = () => {
    navigate('/home')
  }
  return (
    <form action=""
    className='login-form'>
        <div className='input-container'>
          <FontAwesomeIcon icon={faEnvelope} className='leading-icon'/>
        <input type="text" placeholder='Email' id='email'/>
        </div>
        <div className='input-container'>
        <FontAwesomeIcon icon={faLock} className='leading-icon'/>
        <input type={showPassword ? "text": "password"} placeholder='Password' id='pass'/>
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='eyecon'onClick={togglePassVisibility}/>
        </div>
        <a href="" className='forgot-pass'><p>Forgot Password?</p></a>
        <Button label={"Login"} onButtonClick={onLoginButtonClick}/>
        <p className='no-acc'>Don&apos;t have an account? <a href="/signup">Signup</a></p>
    </form>
  )
}

export default LoginForm