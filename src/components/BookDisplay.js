import React, { useState } from 'react';
import BookCard from './BookCard';
import BookList from './BookList';

const BookDisplay = ({ books }) => {
  const [viewMode, setViewMode] = useState('card'); // Default to card view

  const toggleView = () => {
    setViewMode((prevMode) => (prevMode === 'card' ? 'list' : 'card'));
  };

  return (
    <div>
      <button onClick={toggleView}>
        Switch to {viewMode === 'card' ? 'List View' : 'Card View'}
      </button>

      <div>
        {viewMode === 'card' ? (
          <div className="card-view">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="list-view">
            {books.map((book) => (
              <BookList key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDisplay;
