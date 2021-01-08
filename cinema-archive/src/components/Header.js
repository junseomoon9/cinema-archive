import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
      <div>
        <div className="header">
          <div className="inner-header">
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
      </div>
    );
}
