import React from 'react';
import Book from '../Book/Book'
import './BookList.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {

    const [bookList, setbookList] = useState ([])

    useEffect(() => {
        axios.get('http://localhost:8080/books')
        .then(response => {
            setbookList(response.data)
            console.log(bookList)
        })
    }, [])

    if (bookList.length === 0){
        return <h1>Loading...</h1>
    }


    return (
        <div className="booklist">
            <h1 className="booklist__title">My Book Shelf</h1>

        <div className="booklist__container">
            {
                bookList.map((book => {
                    return (
                        <Link className="booklist__link" to={`/bookpage/${book.id}`}>
                                <Book
                                    book = {book}
                                />
                        </Link>
                    )
                }))
            }
        </div>
        </div>
    );
};

export default BookList;