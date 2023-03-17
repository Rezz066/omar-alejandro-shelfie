import React from 'react';
import "./Navigation.scss";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate = useNavigate()

    function handleHomeClick (event) {
        event.preventDefault()

        navigate("/")
    }

 const handleUploadClick = (event) => {
    event.preventDefault()
    
    navigate("/upload")
    
 }


    return (
        <div>
            <nav className="nav">
                <ul className="nav__list">

                    <li onClick={handleHomeClick} className="nav__link">Home</li>
                    <li onClick={handleUploadClick}className="nav__link">Upload</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;