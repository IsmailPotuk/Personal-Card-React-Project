import React from 'react'

const SingleUser = ({user}) => {
  return (
    <div className='single-user'>
        <img src={user.picture.large} alt=""/>    
        <div>
             <h3>{user.name.title}  {user.name.first} {user.name.last}</h3>
             <p className='user-mail'>Email: {user.email} </p>
             <p className='user-location'> {user.location.country} | {user.location.city} | </p>
             <p className='user-age'> Age: {user.dob.age}  </p>
        </div>

    </div>
  )
}

export default SingleUser