import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
      <Link className="navbar-brand" to="/">
        Book Library
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favourites">
              Favourites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
              Advanced Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
