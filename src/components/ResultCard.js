import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'


export const ResultCard = ({result, id}) => {

    const {watchlist, addMovieToWatchlist} = useContext(GlobalContext)
    const media = watchlist.find(medium => medium.id === id)
    const alreadyInWatchlist = media ? true : false
    
    return (
        <div className="result-card">
             <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.description}></img>
             <button disabled={alreadyInWatchlist} onClick={() => addMovieToWatchlist(result)}>Add To Watchlist</button>
        </div>
        
    )
}
