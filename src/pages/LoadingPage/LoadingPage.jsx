import React from 'react';
import './LoadingPage.scss'


const LoadingPage = () => {
    return (
        <>
        <div className="bookshelf_wrapper">
            <div className="bookshelf_container">
                <ul className="books_list">
                    <li className="book_item first"></li>
                    <li className="book_item second"></li>
                    <li className="book_item third"></li>
                    <li className="book_item fourth"></li>
                    <li className="book_item fifth"></li>
                    <li className="book_item sixth"></li>
                </ul>
            </div>
        <div className="shelf"></div>
            <h1 className="loading"> Loading...</h1>
        </div>
        </>
    );
};

export default LoadingPage;