import React from 'react';
import './BookReview.scss';


const BookReview = ({selectedBook}) => {
    return (
        <div>
            <h2 className="bookReview">Review</h2>
            <p className="bookReview__rating"> Rating: {selectedBook.rating}/5</p>
            <p className="bookReview__summary">{selectedBook.review}</p>
        </div>
    );
};

export default BookReview;