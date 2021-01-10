import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const WatchlistCard = ({result, id}) => {

    const {removeMovieFromWatchlist} = useContext(GlobalContext);

    return (
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
          alt={result.description}
        ></img>
        <button onClick={() => removeMovieFromWatchlist(id)}>
          Remove from Watchlist
        </button>
      </div>
    );
}
