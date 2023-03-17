import React from 'react';
import './Bookpage.scss'
import bookImage from '../../assets/images.jpg'

const Bookpage = () => {
    return (
        <div className="bookpage">
            <div className="bookpage__box">
                <img src={bookImage} alt="book-poster" className="bookpage__image"/>
                    <div className="bookpage__content">
                        <h2 className="bookpage__title">The Stand</h2>
                        <p className="bookpage__author">By: Stephen King</p>
                    </div>
            </div>
            <div className="bookpage__container">
                    <h2 className="bookpage__titleSummary">Summary</h2>
                    <p className="bookpage__summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur excepturi delectus molestiae doloribus! Ut, quisquam, asperiores vel aliquid iure quaerat totam necessitatibus quasi eaque minima consequatur ducimus. Obcaecati, earum suscipit!</p>
                    <h2>Review</h2>
            </div>
        </div>
    );
};

export default Bookpage;