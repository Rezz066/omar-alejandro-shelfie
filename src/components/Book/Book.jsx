import React from 'react';
import bookPoster from '../../assets/images.jpg'
import './Book.scss'

const Book = () => {
    return (
        <div className="bookdisplay">
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2>Title</h2>
                <p>Author Name</p>
            </div>
        </div>
    );
};

export default Book;