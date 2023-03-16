import React from 'react';
import Book from '../Book/Book'
import './BookList.scss'

const BookList = () => {
    return (
        <div className="booklist">
            <h1 className="booklist__title">My Book Shelf</h1>
            <Book/>
        </div>
    );
};

export default BookList;