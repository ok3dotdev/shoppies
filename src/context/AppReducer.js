function AppReducer(state, action) {
    switch (action.type) {
        case 'ADD_MOVIE_TO_NOMINATIONS':
            return {
                ...state,
                nominations: (state.nominations.length === 5) ? Object.seal(state.nominations) : ''
            }
        case 'REMOVE_MOVIE_FROM_NOMINATIONS':
            return {
                ...state,
                nominations: state.nominations.filter(nomination => nomination.imdbID !== action.payload)
            }

        default:
            return state;
    }
}

export default AppReducer;