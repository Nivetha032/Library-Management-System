import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../redux/booksSlice';

const EditBookForm = ({ book, onClose }) => {
  const dispatch = useDispatch();
  const [editedBook, setEditedBook] = useState({
    ...book,
    pages: book.pages || '', // initialize pages if not present
  });

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(editedBook));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={editedBook.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={editedBook.author} onChange={handleChange} placeholder="Author" />
      <input name="isbn" value={editedBook.isbn} onChange={handleChange} placeholder="ISBN" />
      <input name="imageUrl" value={editedBook.imageUrl} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditBookForm;
