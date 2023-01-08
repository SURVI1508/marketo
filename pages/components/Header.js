import React from 'react'
import HeaderSearch from './HeaderSearch'
import TopNav from './TopNav'
import Navbar from './Navbar'
import Hero from './Hero'
const Header = () => {
  return (
    <div>
        <TopNav/>
        <HeaderSearch/>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header