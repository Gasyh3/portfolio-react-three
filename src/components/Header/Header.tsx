import React from 'react'
import './Header.scss'

function Header() {
  return (
    <div className="header">
        <a href="/" className="header__logo">
            <img src="/images/logo.png" alt="logo" />
        </a>
        <nav className="header__nav">
            <a href="#about" className="header__link">About</a>
            <a href="#projects" className="header__link">Projects</a>
            <a href="#contact" className="header__link">Contact</a>
        </nav>
    </div>
  )
}

export default Header