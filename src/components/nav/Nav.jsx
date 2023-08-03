import React from 'react'
import './nav.css'
import {BiSolidHomeHeart} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiSolidHomeHeart/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiSolidHomeHeart/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiSolidHomeHeart/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiSolidHomeHeart/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiSolidHomeHeart/></a>
    </nav>
  )
}

export default Nav