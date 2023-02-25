import React from 'react'
import { NavLink } from 'react-router-dom'

function SiteNav() {
  return (
    <nav className='header-nav'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/clock'>Clock</NavLink>
    </nav>
  )
}

export default SiteNav