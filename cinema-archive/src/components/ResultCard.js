import React from 'react'

export const ResultCard = ({result, id}) => {
    return (
        <div className="result-card">
             <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.description}></img>
             <button>Add To Watchlist</button>
        </div>
        
    )
}
