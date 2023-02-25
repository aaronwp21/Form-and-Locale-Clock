import React from 'react'
import { Outlet } from 'react-router-dom'
import SiteNav from './SiteNav'

function Layout() {
  return (
    <>
      <header className='page-header'>
        <SiteNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout