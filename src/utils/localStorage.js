// utils/localStorage.js
export const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('booksState', serializedState);
    } catch (e) {
      console.warn('Could not save state', e);
    }
  };
  
  export const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem('booksState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.warn('Could not load state', e);
      return undefined;
    }
  };
  