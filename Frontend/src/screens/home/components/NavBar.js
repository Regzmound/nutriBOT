import React, { useState } from 'react'
import ProfileDropDown from '../../../components/dropDown/profileDropDown'
import ProfileCard from '../../../components/card/ProfileCard';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openProfileCard = () => {
    setShowProfileCard(true);
    closeDropdown(); 
  };

  const closeProfileCard = () => {
    setShowProfileCard(false);
  };
  return (
    <nav className='nav-bar'>
        <h1 className='logo-text'>NUTRI<span>BOT</span></h1>
        <div className='profile-container' onClick={onButtonClick}></div>
        {isOpen && (
          <ProfileDropDown onProfileClicked={openProfileCard}/>
        )}
        {showProfileCard && <ProfileCard onClose={closeProfileCard}/>}
    </nav>
  )
}

export default NavBar