import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate();

  const togglePassVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onLoginButtonClick = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      // Assuming your backend returns a success status
      if (response.data.success) {
        navigate('/home'); // Redirect to home on successful login
      } else {
        setError(response.data.message); // Set error message from server response
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.'); // Generic error message
    }
  };

  return (
    <form onSubmit={onLoginButtonClick} className='login-form'>
      <div className='input-container'>
        <FontAwesomeIcon icon={faEnvelope} className='leading-icon' />
        <input
          type="text"
          placeholder='Email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
      </div>
      <div className='input-container'>
        <FontAwesomeIcon icon={faLock} className='leading-icon' />
        <input
          type={showPassword ? "text" : "password"}
          placeholder='Password'
          id='pass'
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='eyecon' onClick={togglePassVisibility} />
      </div>
      {error && <p className='error-message'>{error}</p>} {/* Display error message */}
      <a href="" className='forgot-pass'><p>Forgot Password?</p></a>
      <Button label={"Login"} onButtonClick={onLoginButtonClick} />
      <p className='no-acc'>Don&apos;t have an account? <a href="/signup">Signup</a></p>
    </form>
  );
}

export default LoginForm;
