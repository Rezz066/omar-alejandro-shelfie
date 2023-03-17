import React from 'react';
import bookPoster from '../../assets/images.jpg'
import './Book.scss'


const Book = ({book}) => {
    return (


        <div className="bookdisplay">
            <div className="bookdisplay__box">
                <img src={bookPoster} alt="book-image" className="bookdisplay__image"/>
                <h2 className="bookdisplay__title">{book.title}</h2>
                <p className="bookdisplay__name">{book.author}</p>
            </div>
        </div>
    );
};

export default Book;