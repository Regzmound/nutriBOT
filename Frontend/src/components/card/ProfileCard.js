import React, {useState} from 'react';
import './ProfileCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

function ProfileCard({ onClose }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [userName, setUserName] = useState('User Name'); 
  const [tempUserName, setTempUserName] = useState(userName); 
  const handleEditClick = () => {
    setIsEditing(true); 
  };

  const handleUserNameChange = (e) => {
    setTempUserName(e.target.value); 
  };

  const handleSaveChanges = (e) => {
    e.preventDefault(); 
    setUserName(tempUserName); 
    setIsEditing(false); 
  };

  return (
    <div className="profile-card-overlay">
      <div className="profile-card">
        <button className="close-button" onClick={onClose}>X</button>
        <img src="images/logo.png" alt="Logo" className='profile-card-logo'/>
        <form action="">
          <div className='user-name-container'>
            {isEditing ? (
              <input
                type="text"
                value={tempUserName}
                onChange={handleUserNameChange}
                className="user-name-input"
                autoFocus
              />
            ) : (
              <h2 className='user-name'>
                {userName.split(' ')[0]} <span>{userName.split(' ')[1]}</span>
              </h2>
            )}
            <button type="button" className='edit-btn' onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} className='edit-icon' />
            </button>
          </div>
        </form>
        
        <form action="" className='profile-form' onSubmit={handleSaveChanges}>
          <div className='profile-details-form'>
            <input className='profile-details' type="text" name="Gender" id="gender" placeholder='Gender' />
            <input className='profile-details' type="text" name="Height" id="height" placeholder='Height' />
            <input className='profile-details' type="text" name="Age" id="age" placeholder='Age' />
            <input className='profile-details' type="text" name="Weight" id="weight" placeholder='Weight' />
            <input className='profile-details' type="text" name="Health" id="stat" placeholder='Health Status' />
            <input className='profile-details' type="text" name="BMI" id="bmi" placeholder='BMI' />
          </div>
          <button className='save-btn' type='submit'>Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default ProfileCard;
