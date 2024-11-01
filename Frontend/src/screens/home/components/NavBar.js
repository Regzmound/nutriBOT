import React, { useState } from 'react'
import ProfileDropDown from '../../../components/dropDown/profileDropDown'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const onButtonClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className='nav-bar'>
        <h1 className='logo-text'>NUTRI<span>BOT</span></h1>
        <div className='profile-container' onClick={onButtonClick}></div>
        {isOpen && (
          <ProfileDropDown/>
        )}
    </nav>
  )
}

export default NavBar