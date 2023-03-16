import React from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.scss'
import ShelfieLogo from '../../assets/Shelfie.png'

const Header = () => {
    return (
        <div className="header">
            <a href=""><img src={ShelfieLogo} alt="shelife-logo" /></a>
            <Navigation/>
        </div>
    );
};

export default Header;