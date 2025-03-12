import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        {/* topbar */}
        <Topbar />
        {/* navbar */}
        <Navbar />
    </header>
  )
}

export default Header