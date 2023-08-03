import React from 'react'
import './nav.css'
import {BiSolidHomeHeart} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><BiSolidHomeHeart/></a>
      <a href="#about"><BiSolidHomeHeart/></a>
      <a href="#portfolio"><BiSolidHomeHeart/></a>
      <a href="#experience"><BiSolidHomeHeart/></a>
      <a href="#contact"><BiSolidHomeHeart/></a>
    </nav>
  )
}

export default Nav