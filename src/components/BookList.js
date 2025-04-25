import React, { useEffect, useState } from 'react';
import data from '../data/data.json'; // adjust path as needed

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(data); // Simulating fetch from local JSON
  }, []);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Pages: {book.pageCount}</p>
          {book.thumbnailUrl && (
           <img
           src={
             book.thumbnailUrl
               ? book.thumbnailUrl
               : `/images/${book.isbn}.jpg` // fallback to local image using ISBN
           }
           alt={book.title}
           onError={(e) => {
             e.target.onerror = null;
             e.target.src = "https://via.placeholder.com/100x150?text=No+Image";
           }}
           width="100"
           height="150"
         />
         
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
