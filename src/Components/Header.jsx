import { useState } from 'react';

import logo from '/bpLogo.png'
import navLogo from '../assets/navLogo.png'
import closeNavLogo from '../assets/closeNavLogo.png'
import Navbar from './Navbar'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleClick() {
        setNavbarOpen((prevValue) =>{
            return !prevValue;
        });
    }

    return (
    <>
        <div id="background" className={navbarOpen ? 'blur' : ''} onClick={handleClick}></div>
        <header>
            <a href="#">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            </a>
            <Navbar styles={navbarOpen ? 'open' : ''}/>
                <div className="logo-container nav-icon" onClick={handleClick}>
                    <img src={navbarOpen ?closeNavLogo: navLogo } alt="logo" />
                </div>
                

        </header >
     </>
    )
}