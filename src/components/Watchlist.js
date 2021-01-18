import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import {WatchlistCard} from './WatchlistCard'

export const Watchlist = () => {

    const {watchlist} = useContext(GlobalContext)

    return (
      <div className="watchlist">
        <h1 className="watchlist-title"> Your Watchlist</h1>
        <div className="container">
            

            {watchlist.length > 0 ? (
              <div className="inner-container">
              {watchlist.map((result) => (
                <WatchlistCard result={result} id={result.id} />
              ))}
              </div>
            ) : (
              <h2 className="no-movies">No movies in your list, add some!</h2>
            )}
          
        </div>
      </div>
    );
}
