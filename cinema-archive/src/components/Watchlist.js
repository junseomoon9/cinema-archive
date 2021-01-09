import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'
import {WatchlistCard} from './WatchlistCard'

export const Watchlist = () => {

    const {watchlist} = useContext(GlobalContext)

    return (
        <div>
            <h1 className="watchlist-title"> Your Watchlist</h1>
            <div className="container">
                <div className="inner-container">
                    {watchlist.map(result => (
                        
                        <WatchlistCard result={result} key={result.id}/>
                        
                    ))}
                </div>
            </div>
        </div>
    )
}
