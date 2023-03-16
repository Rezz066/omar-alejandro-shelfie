import React from 'react';
import "./Navigation.scss"

const Navigation = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__link">Home</li>
                    <li className="nav__link">Upload</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;