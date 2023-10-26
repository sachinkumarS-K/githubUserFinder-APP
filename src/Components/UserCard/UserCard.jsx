import React from 'react'
import './UserCard.css'
import { NavLink } from 'react-router-dom'
function UserCard({image , name}) {
  return (
    <div className='card'>
          <div className="userImage">
              <NavLink to = {`/user/${name}`}>
              <img src={image} alt="UserImage" />
            </NavLink>
        </div>
          <div className="userName">
          <p>{name}</p>
         </div>
    </div>
  )
}

export default UserCard
