import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

const Favourites = () => {
  const favorites = useSelector((state) => state.books.favorites); // Get the favorites from Redux store

  return (
    <div>
      <h2>Favourites</h2>
      <div className="book-list">
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <p>No books in favourites</p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
