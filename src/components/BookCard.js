// components/BookCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteBook,
  addToFavourites,
  removeFromFavourites,
} from '../redux/booksSlice';
import EditBookForm from './EditBookForm';
import '../styles/bookCard.css';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const favorites = useSelector(state => state.books.favorites);

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(book._id));
  };

  const handleRemoveFromFavourites = () => {
    dispatch(removeFromFavourites(book._id));
  };

  const handleDelete = () => {
    dispatch(deleteBook(book._id));
  };

  const isBookFavourite = favorites.some(fav => fav._id === book._id);

  return (
    <div className="book-card">
      {isEditing ? (
        <EditBookForm book={book} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          {/* Conditionally use imageUrl for user-created books or thumbnailUrl for fetched books */}
          <img
            src={book.isUserCreated 
              ? (book.imageUrl ? book.imageUrl : `/images/${book.isbn}.jpg`) // User-created books
              : (book.thumbnailUrl ? book.thumbnailUrl : `/images/${book.isbn}.jpg`)} // Fetched books
            alt={book.title}
            className="book-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/100x150?text=No+Image'; // Fallback image
            }}
          />

          <div className="book-info">
            <h5>{book.title}</h5>
            <p>{book.authors ? book.authors.join(', ') : book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <p>Pages: {book.pageCount || 'Not available'}</p>
          </div>

          <div
  className="favourite-icon"
  onClick={isBookFavourite ? handleRemoveFromFavourites : handleAddToFavourites}
  title={isBookFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
>
  <i
    className={`bi ${isBookFavourite ? 'bi-heart-fill' : 'bi-heart'}`}
    style={{
      color: isBookFavourite ? 'red' : 'gray',
      cursor: 'pointer',
      fontSize: '1.5rem',
    }}
  ></i>
</div>


          {/* Show Edit/Delete only for books marked as user-created */}
          {book.isUserCreated && (
            <>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BookCard;
