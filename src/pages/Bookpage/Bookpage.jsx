import React from 'react';
import './Bookpage.scss'
import bookImage from '../../assets/images.jpg'
import facebookIcon from '../../assets/Icon-facebook.svg'
import instagramIcon from '../../assets/Icon-instagram.svg'
import twitterIcon from '../../assets/Icon-twitter.svg'
import BookReview from '../../components/BookReview/BookReview';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Bookpage = () => {

    const [selectedBook, setSelectedBook] = useState(null);

    const { bookId } = useParams()

    useEffect (() =>{
        axios.get('http://localhost:8081/books')
        .then(response => {
            const books = response.data.filter(book => { 
                return book.id === bookId
            })

            return axios.get(`http://localhost:8081/books/${books[0].id}`)
        })
        .then(response => {
            setSelectedBook(response.data)
            console.log(selectedBook)
        })
    }, [])

    if (!selectedBook){
        return <h1>Loading...</h1>
    }

    return (
        <div className="bookpage">
            <div className="bookpage__box">
                <div className="bookpage__block">
                <img src={bookImage} alt="book-poster" className="bookpage__image"/>
                    <div className="bookpage__content">
                        <h2 className="bookpage__title">{selectedBook.title}</h2>
                        <p className="bookpage__author">{`By: ${selectedBook.author}`}</p>
                    </div>
                </div>
                    <div className="bookpage__icons">
                        <img src={facebookIcon} alt="facebook-icon" className="bookpage__icons-image" />
                        <img src={instagramIcon} alt="instagram-icon" className="bookpage__icons-image" />
                        <img src={twitterIcon} alt="twitter-icon" className="bookpage__icons-image" />
                    </div>
            </div>
            <div className="bookpage__container">
                    <h2 className="bookpage__titleSummary">Summary</h2>
                    <p className="bookpage__summary">{selectedBook.summary}</p>
                    <BookReview selectedBook = {selectedBook}/>
            </div>
        </div>
    );
};

export default Bookpage;