import React, { useState } from 'react'
import './Home.css'
import NavBar from './components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function HomeScreen() {
    // State for the chat messages and the input text
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    // Handle sending a message
    const handleSendMessage = () => {
      if (inputValue.trim()) {
        // Add user message
        setMessages([...messages, { text: inputValue, sender: 'User' }]);
        setInputValue('');
  
        // Simulate NutriBOT response
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Here is some nutritional advice!', sender: 'NutriBOT' },
          ]);
        }, 500);
      }
    };
  return (
    <>
    <NavBar />
    <center className='home-container'>
      {/* Conditionally render the image and sub-text */}
      {messages.length === 0 && (
                    <>
                        <img src="images/Logo.png" alt="Logo" className='logo'/>
                        <h1 className='sub-text'>Your Personal <span>Nutrition</span> Guide</h1>
                    </>
                )}
      
      {/* Chat conversation area */}
      <div className={`chat-box ${messages.length > 0 ? 'fixed-chat' : ''}`}>
        
        <div className={messages.length > 0 ? 'has-chat-messages': 'chat-messages'}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === 'User' ? 'user-message' : 'bot-message'}`}
            >
              {msg.sender === "User" ? (
                <>{msg.text}</>
              ): <div className='bot-reply-section'>
                <img src="images/Logo.png" alt="Logo" className='bot-profile'/>
                {msg.text}
              </div> }
            </div>
          ))}
        </div>
        <div className='chat-input-container'>
        {messages.length > 0 && (
          <button className='new-btn' onClick={()=> {}}><FontAwesomeIcon icon={faPlus}/></button>
        )}
          <input
            type="text"
            placeholder='Ask NutriBOT'
            className={messages.length > 0? "chat-with-input": "chat-input"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={messages.length > 0? 'new-send-btn' : 'send-btn'} onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </center>
  </>
    
  )
}

export default HomeScreen