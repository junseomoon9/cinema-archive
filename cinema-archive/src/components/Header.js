import React from 'react';
import {Link} from 'react-router-dom';
import {FaFilm} from 'react-icons/fa'

export const Header = () => {
    return (
        <div className="header">
          <div className="inner-header">
            <Link to="/">
              <div className="cinema-icon">
                  <FaFilm/>
              </div>
            </Link>
            <div className="brand">
              <Link to="/">Cinema Archive</Link>
            </div>
            <div className="nav-links">
              
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/tv">TV</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watchlist</Link>
                </li>
              
            </div>
          </div>
          
        </div>
    );
}
