import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './booksSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
