import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/pfp.jpeg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header> 
        <div className="container header__container">
          <h1>Thanyared Wong</h1>
          <h5 className="text_light">Computer Science: Computer Game Design at UCSC</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="Thanyared Wong smiling in front of a wall of leaves and flowers." />
          </div> 
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header