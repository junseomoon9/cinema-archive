import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export const DropdownMenu = ({trigger, setTrigger}) => {
    return (trigger) ? (
        <div className="dropdown-menu">
            <FaTimes className="dropdown-close-icon" onClick={() => setTrigger(false)}/>
            <div className="dropdown-menu-container">
                <div className="dropdown-links">
                    <li>
                        <Link to="/movies" onClick={() => setTrigger(false)}>Movies</Link>
                    </li>
                    <li>
                        <Link to="/tv" onClick={() => setTrigger(false)}>TV</Link>
                    </li>
                    <li>
                        <Link to="/watchlist"onClick={() => setTrigger(false)}>Watchlist</Link>
                    </li>
                </div>
            </div>
        </div>
    ) : "";
}


