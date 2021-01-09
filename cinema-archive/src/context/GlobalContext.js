import React, {createContext, useReducer} from 'react'
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

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