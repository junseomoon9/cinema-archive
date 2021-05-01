import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaFilm} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import {DropdownMenu} from './DropdownMenu'

export const Header = () => {

    const [ClickedDropdown, SetClickedDropdown] = useState(false);

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

            <div className="dropdown">
                <div className="dropdown-icon">
                    <FaBars onClick={() => SetClickedDropdown(true)}/>
                </div>
            </div>

            <DropdownMenu trigger={ClickedDropdown} setTrigger={SetClickedDropdown}/>
              
            
          </div>
          
        </div>
    );
}
