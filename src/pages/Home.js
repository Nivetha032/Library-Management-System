import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import BookCard from '../components/BookCard';
import AddBook from '../components/AddBookForm';  // Import AddBook component
import '../styles/app.css';  // Import global styles

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      if (books.length === 0) {
        data.forEach((book) => {
          dispatch(addBook(book));
        });
      }
    };
    fetchBooks();
  }, [dispatch, books.length]);

  return (
    <div>
      <h2>Book List</h2>
      <div className="book-list-container">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <AddBook /> {/* Display the AddBook component */}
    </div>
  );
};

export default Home;
