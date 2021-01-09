import React from 'react'

export const WatchlistCard = ({result, id}) => {
    return (
        <div>
            <div className="movie-card">
             <img src={`https://image.tmdb.org/t/p/w200${result.poster_path}`} alt={result.description}></img>
            </div>
        </div>
    )
}
