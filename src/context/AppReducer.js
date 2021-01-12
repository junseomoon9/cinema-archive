export default (state, action) => {
    switch (action.type) {
      case "ADD_MEDIA_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case "REMOVE_MEDIA_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (media) => media.id !== action.payload
          ),
        };
      default:
        return state;
    }
}
