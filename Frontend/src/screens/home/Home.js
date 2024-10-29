import React from 'react'
import './Home.css'
import NavBar from './components/NavBar'

function HomeScreen() {
  return (
    <>
    <NavBar/>
    <center className='home-container'>
      <img src="images/Logo.png" alt="" />
      <h1 className='sub-text'>Your Personal <span>Nutrition</span> Guide</h1>
      <div className='chat-box'>
        <input type="text" placeholder='Ask NutriBOT' className='chat-input'/>
        <button className='send-btn'>Send</button>
      </div>
    </center>
    </>
    
  )
}

export default HomeScreen