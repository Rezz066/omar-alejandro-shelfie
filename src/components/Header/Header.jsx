import React from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.scss'
import ShelfieLogo from '../../assets/Shelfie.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to={`/`}>
                <a href=""><img src={ShelfieLogo} alt="shelife-logo" /></a>
            </Link>
            <Navigation/>
        </div>
    );
};

export default Header;