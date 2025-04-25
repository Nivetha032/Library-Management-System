// redux/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: JSON.parse(localStorage.getItem('books')) || [],
  favorites: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Manually added books will have the flag "isUserCreated: true"
      const newBook = {
        ...action.payload,
        _id: Date.now(), // Ensure uniqueness with _id
        isUserCreated: true, // Mark it as user-created
      };
      state.books.push(newBook);
      localStorage.setItem('books', JSON.stringify(state.books));
    },

    deleteBook: (state, action) => {
      state.books = state.books.filter(book => book._id !== action.payload);
      state.favorites = state.favorites.filter(book => book._id !== action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },

    addToFavourites: (state, action) => {
      const book = state.books.find(book => book._id === action.payload);
      if (book && !state.favorites.some(fav => fav._id === action.payload)) {
        state.favorites.push(book);
      }
    },

    removeFromFavourites: (state, action) => {
      state.favorites = state.favorites.filter(book => book._id !== action.payload);
    },

    editBook: (state, action) => {
      const updatedBook = action.payload;
      const index = state.books.findIndex(book => book._id === updatedBook._id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }

      const favIndex = state.favorites.findIndex(book => book._id === updatedBook._id);
      if (favIndex !== -1) {
        state.favorites[favIndex] = updatedBook;
      }

      localStorage.setItem('books', JSON.stringify(state.books));
    },
  },
});

export const {
  addBook,
  deleteBook,
  addToFavourites,
  removeFromFavourites,
  editBook,
} = booksSlice.actions;

export default booksSlice.reducer;
