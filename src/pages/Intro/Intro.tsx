import React from 'react'
import Logo from "../../assets/logo.svg";
import './Intro.scss';
import LogoKevin from "../../components/LogoKevin/LogoKevin";

function Intro() {
  return (
        <div className="sky">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="intro">
                <div className="intro__container">
                    <LogoKevin />
                    <nav className="intronav">
                        <a href="#about" className="intronav__link">About</a>
                        <a href="#projects" className="intronav__link">Projects</a>
                        <a href="#contact" className="intronav__link">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
   
  )
}

export default Intro