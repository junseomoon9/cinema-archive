import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'


export const ResultCard = ({result, id}) => {

    const { addMovieToWatchlist} = useContext(GlobalContext)

    return (
        <div className="result-card">
             <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.description}></img>
             <button onClick={() => addMovieToWatchlist(result)}>Add To Watchlist</button>
        </div>
        
    )
}
