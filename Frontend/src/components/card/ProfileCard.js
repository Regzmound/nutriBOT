import React from 'react';
import './ProfileCard.css';

function ProfileCard({ onClose }) {
  return (
    <div className="profile-card-overlay">
      <div className="profile-card">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
        <p>Additional info about the user...</p>
      </div>
    </div>
  );
}

export default ProfileCard;
