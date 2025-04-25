import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import '../styles/addBook.css'; // Make sure this path is correct

const AddBookPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [pages, setPages] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ensure pages is a number, if possible
    const newBook = {
      title,
      author,
      isbn,
      pageCount: pages ? parseInt(pages, 10) : 0,  // Convert pages to a number, or 0 if it's empty
      imageUrl,
      isUserCreated: true,
    };

    // Dispatch the addBook action
    dispatch(addBook(newBook));

    // Clear the form after submission
    setTitle('');
    setAuthor('');
    setIsbn('');
    setPages('');  // Reset pages field
    setImageUrl('');
  };

  return (
    <div className="add-book-container">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          placeholder="ISBN"
        />
        <input
          type="text"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
          placeholder="Pages"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
