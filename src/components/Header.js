import React from 'react';
import Logo from '../images/logo.svg';

export default function Header() {
    return (
        <header>
            <nav className="nav"> 
            <div className='reactSymbol'>
                <img src={Logo} className="nav-logo" alt="react logo"/>
                <span className='reactFacts'>ReactFacts</span>
                </div>
                <div>
                    <h3>React Course - Project 1</h3>
                </div>
                {/* <ul className="nav-items">
                    <li>Menu</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
            </nav>
        </header>
    )
  }