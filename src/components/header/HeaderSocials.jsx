import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/t-amandawong" target="_blank"><BsGithub size={32}/></a>
        <a href="https://www.linkedin.com/in/thanyared/" target="_blank"><BsLinkedin size={32}/></a>
    </div>
  )
}

export default HeaderSocials