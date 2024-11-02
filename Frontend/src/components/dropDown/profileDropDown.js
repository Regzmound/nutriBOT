import React from 'react'
import './dropDown.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileContract, faInfoCircle, faSignOut, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function ProfileDropDown({onProfileClicked}) {
  const navigate = useNavigate()

  const onItemClick = (path) => {
    navigate(path)
  }
  return (
    <>
    <div className="dropdown-card">
          <ul className="card-menu">
            <li className="card-item" onClick={onProfileClicked}><FontAwesomeIcon icon={faUser} className='card-icon'/>Profile</li>
            <li className="card-item" onClick={()=>{onItemClick("/")}}><FontAwesomeIcon icon={faFileContract} className='card-icon'/>Terms & Privacy</li>
            <li className="card-item" onClick={()=>{onItemClick("/")}}><FontAwesomeIcon icon={faInfoCircle} className='card-icon'/>About</li>
            <li className="card-item" onClick={()=>{onItemClick("/")}}><FontAwesomeIcon icon={faSignOut} className='card-icon'/>Logout</li>
          </ul>
        </div>
    </>
  )
}

export default ProfileDropDown