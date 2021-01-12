import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])

    // actions
    const addMovieToWatchlist = media => {
        dispatch({type: "ADD_MEDIA_TO_WATCHLIST", payload: media})
    }

    const removeMovieFromWatchlist = id => {
        dispatch({type: "REMOVE_MEDIA_FROM_WATCHLIST", payload: id})
    }

    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, addMovieToWatchlist, removeMovieFromWatchlist}}>
            {props.children}
        </GlobalContext.Provider>
    )
}