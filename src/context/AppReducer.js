export default (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE_TO_NOMINATIONS':
            return {
                ...state,
                nominations: [action.payload, ...state.nominations]
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