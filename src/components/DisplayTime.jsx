import React from 'react'

function DisplayTime({currentTime}) {
  return (
    <div>
      <p className='time'>{currentTime}</p>
    </div>
  )
}

export default DisplayTime