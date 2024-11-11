import React, {useEffect, useState, useRef} from 'react';
import './ProfileCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit, faCamera} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function ProfileCard({ onClose }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [userName, setUserName] = useState('User Name'); 
  const [tempUserName, setTempUserName] = useState(userName); 
  const [loading, setLoading] = useState(false);  // State to handle loading
  const [userDetails, setUserDetails] = useState({});  // State to store fetched user details
  const [profileImage, setProfileImage] = useState('/images/defProfile.webp');
  const fileInputRef = useRef(null);
  
  // Fetch user details from the backend
  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token'); // Retrieve token from storage

    if (!token) {
        console.error('No token found');
        return;
    }

    setLoading(true); // Set loading state

    try {
        const response = await axios.get('http://localhost:5000/api/user/profile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('User details:', response.data);
        setUserDetails(response.data.profile); 
        setUserName(response.data.profile.username)
        setTempUserName(response.data.profile.username || response.data.profile.name || 'User Name'); 
    } catch (error) {
        console.error('Error fetching user details:', error.response?.data?.message || 'Something went wrong');
    } finally {
        setLoading(false); 
    }
  };


  useEffect(() => {
    fetchUserDetails();
  }, []);


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUserNameChange = (e) => {
    setTempUserName(e.target.value);
  };
const handleSaveChanges = async (e) => {
  e.preventDefault();
  setUserDetails({ ...userDetails, username: tempUserName });

  try {
    setIsEditing(false);
    await updateUserDetails();
  } catch (error) {
    console.error('Error updating user details:', error);
  }
};

const updateUserDetails = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await axios.put(
      'http://localhost:5000/api/user/profile',
      { username: tempUserName, ...userDetails },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log('Update successful:', response.data);
    alert("Profile Updated Successfully!")
  } catch (error) {
    console.error('Failed to update:', error.response?.data?.message || error.message);
    alert(error.response?.data?.message || error.message)
    throw error; 
  }
};

const bmi = userDetails.height && userDetails.weight ? (userDetails.weight / (userDetails.height * userDetails.height)).toFixed(2) : 'Not Identified';

const getHealthStatus = (bmi) => {
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else if(bmi === "Not Identified"){
    return 'Not Identified'
  } else {
    return 'Obesity';
  }
};


//handle update profile pic


const status = getHealthStatus(bmi)
  return (
    <div className="profile-card-overlay">

    <div className="profile-card">
      <button className="close-button" onClick={onClose}>X</button>
      <div className='profile-container'>
     <img src="images/profile.jpg" alt="Logo" className='profile-card-logo'/>
     <div
            className="hover-cam"
              // onClick={handleButtonClick}
            >
              <FontAwesomeIcon
                icon={faCamera}
                className="camera-icon"
              />
            </div>
            
      </div>
      <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                // onChange={handleImageUpload}
                className="hidden-inp"
              />
     
      {loading ? <p>Loading...</p> : null}

      <form onSubmit={handleSaveChanges} className='username-form' >
        <div className='user-name-container'>
          {isEditing ? (
            <input
              type="text"
              value={tempUserName}
              placeholder='Set username'
              onChange={handleUserNameChange}
              className="user-name-input"
              autoFocus
            />
          ) : (
            <h2 className='user-name'>
             {userDetails ? (
    <>
      {userDetails.username ? (
        <>
          {userDetails.username.split(' ')[0]} <span>{userDetails.username.split(' ')[1]}</span>
        </>
      ) : (
        userDetails.name || 'User Name'
      )}
    </>
  ) : (
    'Loading...'
  )}
            </h2>
          )}
          {isEditing ? (
              <button className='save-user-name-btn' type='submit'>Save</button>
          ): (
            <FontAwesomeIcon icon={faEdit} className='edit-icon' onClick={handleEditClick}/>
          )}
        </div>
      </form>
      
      <form className='profile-form' onSubmit={handleSaveChanges}>
        <div className='profile-details-form'>
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="profile-details"
            name="Gender"
            id="gender"
            value={userDetails.gender || ''}
            onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
          <div className='input-group'>
          <label htmlFor="height">height</label>
          <input
            className='profile-details'
            type="number"
            name="Height"
            id="height"
            placeholder="Height"
            value={userDetails.height || ''}
            onChange={(e) => setUserDetails({ ...userDetails, height: e.target.value })}
          />
          </div>
          <div className='input-group'>
            <label htmlFor="age">Age</label>
          <input
            className='profile-details'
            type="number"
            name="Age"
            id="age"
            placeholder="Age"
            value={userDetails.age || ''}
            onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
          />
          </div>
          <div className='input-group'>
            <label htmlFor="weight">Weight</label>
          <input
            className='profile-details'
            type="number"
            name="Weight"
            id="weight"
            placeholder="Weight"
            value={userDetails.weight || ''}
            onChange={(e) => setUserDetails({ ...userDetails, weight: e.target.value })}
          />
          </div>
          <div className='input-group'>
            <label htmlFor="stat">Health Status</label>
          <input
            className='profile-details'
            type="text"
            name="Health"
            id="stat"
            disabled
            placeholder="Health Status"
            value={status}
          />
          </div>
          <div className='input-group'>
            <label htmlFor="bmi">BMI</label>
          <input
            className='profile-details'
            type="text"
            name="BMI"
            id="bmi"
            disabled
            placeholder="BMI"
            value={bmi}
          />
          </div>
        </div>
        <button className='save-btn' type='submit'>Save Changes</button>
      </form>
      <p className='note'>Note: Keep your profile updated for accurate health tracking and personalized insights.</p>
    </div>
  </div>
  );
}

export default ProfileCard;
