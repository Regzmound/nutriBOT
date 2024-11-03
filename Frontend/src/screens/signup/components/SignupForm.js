import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios for HTTP requests
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePassVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!username || !email || !password || !confirmPassword) {
          alert("All fields are required!");
          return;
      }
  
      if (password !== confirmPassword) {
          alert("Passwords do not match!");
          return;
      }
  
      try {
          const response = await axios.post('http://localhost:5000/api/signup', {
              username,
              email,
              password,
          });
          alert(response.data.message || 'Signup successful!');
          navigate('/login')
      } catch (error) {
          const errorMessage = error.response?.data?.message || 'Error signing up';
          alert(errorMessage);
      }
  };
  
    return (
        <form onSubmit={handleSubmit} className='signup-form'>
            <div className='input-container'>
                <FontAwesomeIcon icon={faUser} className='leading-icon' />
                <input 
                    type="text" 
                    placeholder='Username' 
                    id='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='input-container'>
                <FontAwesomeIcon icon={faEnvelope} className='leading-icon' />
                <input 
                    type="text" 
                    placeholder='Email' 
                    id='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='input-container'>
                <FontAwesomeIcon icon={faLock} className='leading-icon' />
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='Password' 
                    id='pass'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className='input-container'>
                <FontAwesomeIcon icon={faLock} className='leading-icon' />
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder='Confirm Password' 
                    id='c-pass'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='eyecon' onClick={togglePassVisibility} />
            </div>
            <Button label={"Signup"} onButtonClick={handleSubmit} />
            <p className='no-acc'>Already have an account? <a href="/login">Login</a></p>
        </form>
    );
}

export default SignupForm;
