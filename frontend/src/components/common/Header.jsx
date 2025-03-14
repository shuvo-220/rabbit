import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'

const Header = () => {
  
  return (
    <header className='border-b border-gray-200'>
        {/* topbar */}
        <Topbar />
        {/* navbar */}
        <Navbar />
    </header>
  )
}

export default Header