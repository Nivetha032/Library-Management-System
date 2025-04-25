import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Favourites from './pages/Favourite';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdvancedSearch from './pages/AdvancedSearch';
import AddBookPage from './pages/AddBookPage'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBookPage />} /> {/* Optional page */}
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/search" element={<AdvancedSearch />} />
      
      </Routes>
    </Router>
  );
}

export default App;
