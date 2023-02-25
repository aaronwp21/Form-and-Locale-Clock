import React from 'react'

function Results({username, email, age}) {
  return (
    <div className='results'>
        <p>Username: <span>{username}</span></p>
        <p>Email: <span>{email}</span></p>
        <p>Age: <span>{age}</span></p>
    </div>
  )
}

export default Results